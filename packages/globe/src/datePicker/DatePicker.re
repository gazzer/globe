open ReactUtils;
open OptionUtils;
open ResponsiveProps;
open MomentRe;
open DateInput;
open Js.Date;

[%bs.raw {| require("react-dates/initialize") |}];
[%bs.raw {| require("react-dates/lib/css/_datepicker.css") |}];
[%bs.raw {| require("./reset.css") |}];

module SingleDatePicker = {
  [@bs.module "react-dates/lib/components/SingleDatePicker"] [@react.component]
  external make:
    (
      ~block: bool=?,
      ~required: bool=?,
      ~isOutsideRange: Moment.t => bool=?,
      ~showClearDate: bool=?,
      ~displayFormat: string=?,
      ~numberOfMonths: int=?,
      ~disabled: bool=?,
      ~withFullScreenPortal: bool=?,
      ~id: string,
      ~date: Moment.t=?,
      ~placeholder: string,
      ~focused: bool,
      ~onDateChange: Js.Nullable.t(Moment.t) => unit,
      ~onFocusChange: Js.t('a) => unit,
      unit
    ) =>
    React.element =
    "default";
};

[@react.component]
let make =
    (
      ~value: date=defaultDate,
      ~isOutsideRange=?,
      ~withFullScreenPortal=?,
      ~name,
      ~label=?,
      ~error=?,
      ~required=?,
      ~disabled=?,
      ~isValid=?,
      ~onChange,
      ~placeholder="",
    ) => {
  let css = ReactFela.useFela();
  let (focused, setFocused) = React.useState(_ => false);

  let date =
    value.year !== None
      ? Some(
          makeWithYMD(
            ~year=float_of_int(resolveOption(value.year, y => y, 0)),
            ~month=float_of_int(resolveOption(value.month, m => m, 0)),
            ~date=float_of_int(resolveOption(value.day, d => d, 0)),
            (),
          ),
        )
      : None;
  let momentDate =
    switch (date) {
    | Some(date) => Some(momentWithDate(date))
    | None => None
    };

  let onDateChange = newDate => {
    switch (Js.Nullable.toOption(newDate)) {
    | Some(newDate) =>
      let floatDate = Moment.valueOf(newDate);
      let date = fromFloat(floatDate);

      onChange({
        day: Some(int_of_float(getDate(date))),
        month: Some(int_of_float(getMonth(date))),
        year: Some(int_of_float(getFullYear(date))),
      });
    | None => onChange({day: None, month: None, year: None})
    };
  };

  <Box grow={Int(1)} shrink={Int(1)} space={Int(1)}>
    {switch (label) {
     | Some(label) =>
       <Label ?disabled pointer=true htmlFor=name> label </Label>
     | None => n
     }}
    <div
      className={css(
        collapseOption([
          resolveOption(
            disabled,
            d => d ? Some(Fela.raw("disabled")) : None,
            None,
          ),
          focused ? Some(Fela.raw("focused")) : None,
          resolveOption(
            isValid,
            v => v ? None : Some(Fela.raw("invalid")),
            None,
          ),
          Some(DatePickerStyle.container()),
        ]),
      )}>
      <SingleDatePicker
        ?disabled
        ?isOutsideRange
        ?withFullScreenPortal
        // ?required
        block=true
        id=name
        showClearDate={resolveOption(disabled, d => !d, true)}
        numberOfMonths=1
        displayFormat="dddd, DD MMM, YYYY"
        placeholder={resolveOption(
          disabled,
          d => d ? "" : placeholder,
          placeholder,
        )}
        date=?momentDate
        focused
        onFocusChange={obj => setFocused(obj##focused)}
        onDateChange
      />
    </div>
    {switch (error) {
     | Some(error) => <Warning> error </Warning>
     | None => n
     }}
  </Box>;
};