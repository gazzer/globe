open MomentRe;
open Js.Date;
open Utils;

type dateTime = {
  day: option(int),
  month: option(int),
  year: option(int),
  hours: option(int),
  minutes: option(int),
};

let defaultDateTime = {
  day: None,
  month: None,
  year: None,
  hours: None,
  minutes: None,
};

[@react.component]
let make =
    (
      ~name,
      ~value: dateTime=defaultDateTime,
      ~isOutsideRange=?,
      ~fullscreenDatePicker=false,
      ~disabled=?,
      ~isValid=?,
      ~required=?,
      ~onChange,
      ~onFocus=?,
    ) => {
  let css = ReactFela.useFela1();
  let date: DateInput.date = {
    day: value.day,
    month: value.month,
    year: value.year,
  };

  let time: TimeInput.time = {hours: value.hours, minutes: value.minutes};

  <div className={css(DateTimeInputStyle.container())}>
    <DatePicker
      ?required
      ?disabled
      ?isValid
      withFullScreenPortal=fullscreenDatePicker
      name={name ++ "date"}
      placeholder="Date"
      ?isOutsideRange
      value=date
      onChange={(newDate: DateInput.date) =>
        onChange({
          ...value,
          day: newDate.day,
          month: newDate.month,
          year: newDate.year,
        })
      }
    />
    <Spacer size=10 />
    <div className={css(DateTimeInputStyle.timeInput())}>
      <TimeInput
        ?required
        ?disabled
        ?isValid
        ?onFocus
        name={name ++ "time"}
        value=time
        onChange={(newTime: TimeInput.time) =>
          onChange({...value, hours: newTime.hours, minutes: newTime.minutes})
        }
      />
    </div>
  </div>;
};