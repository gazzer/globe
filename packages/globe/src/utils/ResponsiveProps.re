type propType =
  | Int(int)
  | Array(array(int))
  | String(string)
  | StringArray(array(string))
  | Bool(bool)
  | BoolArray(array(bool));

type responsive;

external ofInt: int => responsive = "%identity";
external ofArray: array(int) => responsive = "%identity";
external ofString: string => responsive = "%identity";
external ofStringArray: array(string) => responsive = "%identity";
external ofBool: bool => responsive = "%identity";
external ofBoolArray: array(bool) => responsive = "%identity";
external ofNone: option(int) => responsive = "%identity";

let toResponsive: option(propType) => responsive =
  fun
  | Some(Int(a)) => ofInt(a)
  | Some(Array(a)) => ofArray(a)
  | Some(String(a)) => ofString(a)
  | Some(StringArray(a)) => ofStringArray(a)
  | Some(Bool(a)) => ofBool(a)
  | Some(BoolArray(a)) => ofBoolArray(a)
  | None => ofNone(None);