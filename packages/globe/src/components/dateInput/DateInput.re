open ReactUtils;
open OptionUtils;
open ResponsiveProps;

type date = {
  year: option(int),
  month: option(int),
  day: option(int),
};

let defaultDate = {year: None, month: None, day: None};

let getNewValue = value =>
  Js.String.length(value) === 0 ? None : Some(int_of_string(value));

[@react.component]
let make =
    (
      ~value: date=defaultDate,
      ~name,
      ~required=?,
      ~isValid=?,
      ~disabled=?,
      ~onChange: date => unit,
      ~onBlur=?,
      ~onFocus=?,
      ~label=?,
      ~error=?,
      (),
    ) => {
  <Box grow={Int(1)} shrink={Int(1)} space={Int(1)}>
    {switch (label) {
     | Some(label) =>
       <Label ?disabled pointer=true htmlFor=name> label </Label>
     | None => n
     }}
    <Box
      direction={String("row")}
      grow={Int(1)}
      shrink={Int(1)}
      space={Int(2)}>
      <Box grow={Int(1)} shrink={Int(1)} size={Int(80)}>
        <TextInput
          name={name ++ "-day"}
          placeholder="Day"
          ?isValid
          ?required
          ?disabled
          ?onBlur
          ?onFocus
          value={resolveOption(value.day, v => string_of_int(v), "")}
          onChange={v => onChange({...value, day: getNewValue(v)})}
        />
      </Box>
      <Box grow={Int(1)} shrink={Int(1)} size={Int(200)}>
        <Select
          ?isValid
          ?required
          ?disabled
          name={name ++ "month"}
          // extend={TimeInputStyle.input()}
          value={resolveOption(value.month, v => string_of_int(v), "")}
          ?onFocus
          onChange={v =>
            onChange({
              ...value,
              month: resolveOption(getNewValue(v), v => Some(v), None),
            })
          }>
          <option value=""> ""->s </option>
          <option value="0"> "January"->s </option>
          <option value="1"> "February"->s </option>
          <option value="2"> "March"->s </option>
          <option value="3"> "April"->s </option>
          <option value="4"> "May"->s </option>
          <option value="5"> "June"->s </option>
          <option value="6"> "July"->s </option>
          <option value="7"> "August"->s </option>
          <option value="8"> "September"->s </option>
          <option value="9"> "October"->s </option>
          <option value="10"> "November"->s </option>
          <option value="11"> "December"->s </option>
        </Select>
      </Box>
      <Box grow={Int(1)} shrink={Int(1)} size={Int(100)}>
        <TextInput
          placeholder="Year"
          name={name ++ "-year"}
          ?isValid
          ?required
          ?disabled
          ?onBlur
          ?onFocus
          value={resolveOption(value.year, v => string_of_int(v), "")}
          onChange={v => onChange({...value, year: getNewValue(v)})}
        />
      </Box>
    </Box>
    {switch (error) {
     | Some(error) => <Warning> error </Warning>
     | None => n
     }}
  </Box>;
};