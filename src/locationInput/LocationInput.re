[@bs.module "./index.js"] [@react.component]
external make:
  (
    ~value: string,
    ~isValid: bool=?,
    ~name: string,
    ~onChange: (string, Js.Json.t) => unit,
    ~type_: string=?
  ) =>
  React.element =
  "default";