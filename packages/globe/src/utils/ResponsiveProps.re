type propType =
  | Int(int)
  | String(string)
  | StringArray(array(string))
  | Bool(bool)
  | BoolArray(array(bool))
  | Array(array(int));

type responsive;

external ofArray: array(int) => responsive = "%identity";
external ofInt: int => responsive = "%identity";
external ofString: string => responsive = "%identity";
external ofStringArray: array(string) => responsive = "%identity";
external ofBool: bool => responsive = "%identity";
external ofBoolArray: array(bool) => responsive = "%identity";
external ofNone: option(int) => responsive = "%identity";

let toResponsive: option(propType) => responsive =
  fun
  | Some(Array(a)) => ofArray(a)
  | Some(Int(a)) => ofInt(a)
  | Some(String(a)) => ofString(a)
  | Some(StringArray(a)) => ofStringArray(a)
  | Some(Bool(a)) => ofBool(a)
  | Some(BoolArray(a)) => ofBoolArray(a)
  | None => ofNone(None);