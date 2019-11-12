open Utils;

type time = {
  hours: option(int),
  minutes: option(int),
};

[@react.component]
let make =
    (
      ~value: time,
      ~onFocus=?,
      ~onChange,
      ~name,
      ~disabled=?,
      ~required=?,
      ~isValid=?,
    ) => {
  let css = ReactFela.useFela1();

  <div className={css(TimeInputStyle.container())}>
    <Select
      ?isValid
      ?required
      ?disabled
      name={name ++ "hours"}
      // extend={TimeInputStyle.input()}
      value={resolveOption(value.hours, v => string_of_int(v), "")}
      ?onFocus
      onChange={v =>
        onChange({
          ...value,
          hours: Js.String.length(v) === 0 ? None : Some(int_of_string(v)),
        })
      }>
      <option value=""> ""->s </option>
      <option value="1"> "01"->s </option>
      <option value="2"> "02"->s </option>
      <option value="3"> "03"->s </option>
      <option value="4"> "04"->s </option>
      <option value="5"> "05"->s </option>
      <option value="6"> "06"->s </option>
      <option value="7"> "07"->s </option>
      <option value="8"> "08"->s </option>
      <option value="9"> "09"->s </option>
      <option value="10"> "10"->s </option>
      <option value="11"> "11"->s </option>
      <option value="12"> "12"->s </option>
      <option value="13"> "13"->s </option>
      <option value="14"> "14"->s </option>
      <option value="15"> "15"->s </option>
      <option value="16"> "16"->s </option>
      <option value="17"> "17"->s </option>
      <option value="18"> "18"->s </option>
      <option value="19"> "19"->s </option>
      <option value="20"> "20"->s </option>
      <option value="21"> "21"->s </option>
      <option value="22"> "22"->s </option>
      <option value="23"> "23"->s </option>
    </Select>
    <Spacer size=10 />
    <Select
      ?isValid
      ?required
      ?disabled
      name={name ++ "minutes"}
      // extend={TimeInputStyle.input()}
      value={resolveOption(value.minutes, v => string_of_int(v), "")}
      ?onFocus
      onChange={v =>
        onChange({
          ...value,
          minutes:
            Js.String.length(v) === 0 ? None : Some(int_of_string(v)),
        })
      }>
      <option value=""> ""->s </option>
      <option value="0"> "00"->s </option>
      <option value="5"> "05"->s </option>
      <option value="10"> "10"->s </option>
      <option value="15"> "15"->s </option>
      <option value="20"> "20"->s </option>
      <option value="25"> "25"->s </option>
      <option value="30"> "30"->s </option>
      <option value="35"> "35"->s </option>
      <option value="40"> "40"->s </option>
      <option value="45"> "45"->s </option>
      <option value="50"> "50"->s </option>
      <option value="55"> "55"->s </option>
    </Select>
  </div>;
};