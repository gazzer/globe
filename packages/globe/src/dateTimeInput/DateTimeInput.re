open ReactUtils;
open ResponsiveProps;

type dateTime = {
  year: option(int),
  month: option(int),
  day: option(int),
  hours: option(int),
  minutes: option(int),
};

let defaultDateTime = {
  year: None,
  month: None,
  day: None,
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
      ~label=?,
      ~error=?,
    ) => {
  let date: DateInput.date = {
    day: value.day,
    month: value.month,
    year: value.year,
  };

  let time: TimeInput.time = {hours: value.hours, minutes: value.minutes};

  <Box grow={Int(1)} shrink={Int(1)} space={Int(1)}>
    {switch (label) {
     | Some(label) =>
       <Label ?disabled pointer=true htmlFor=name> label </Label>
     | None => n
     }}
    <Box
      grow={Int(1)}
      shrink={Int(1)}
      space={Int(2)}
      extend={Fela.style({
        "@media (min-width: 550px)": {
          "flexDirection": "row",
        },
      })}>
      <Box grow={Int(1)} shrink={Int(1)}>
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
      </Box>
      <Box grow={Int(1)} shrink={Int(1)} minWidth={Int(180)}>
        <TimeInput
          ?required
          ?disabled
          ?isValid
          ?onFocus
          name={name ++ "time"}
          value=time
          onChange={(newTime: TimeInput.time) =>
            onChange({
              ...value,
              hours: newTime.hours,
              minutes: newTime.minutes,
            })
          }
        />
      </Box>
    </Box>
    {switch (error) {
     | Some(error) => <Warning> error </Warning>
     | None => n
     }}
  </Box>;
};