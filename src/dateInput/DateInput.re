open Utils;

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
      (),
    ) => {
  let css = ReactFela.useFela1();

  <div className={css(DateInputStyle.dateInput())}>
    <div className={css(DateInputStyle.dateInputGroup())}>
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
    </div>
    <div className={css(DateInputStyle.dateInputGroup())}>
      <Select
        ?isValid
        ?required
        ?disabled
        name={name ++ "month"}
        // extend={TimeInputStyle.input()}
        value={resolveOption(value.month, v => string_of_int(v-1), "")}
        ?onFocus
        onChange={v => onChange({...value, month: resolveOption(getNewValue(v), v => Some(v+1), None)})}>
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
    </div>
    <div className={css(DateInputStyle.dateInputGroup())}>
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
    </div>
  </div>;
};