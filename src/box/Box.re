[@bs.module "./index.js"] [@react.component]
external make:
  (
    ~_as: string=?,
    ~children: React.element=?,
    ~space: int=?,
    ~padding: int=?,
    ~paddingTop: int=?,
    ~paddingLeft: int=?,
    ~paddingBottom: int=?,
    ~paddingRight: int=?,
    ~margin: int=?,
    ~marginTop: int=?,
    ~marginLeft: int=?,
    ~marginBottom: int=?,
    ~marginRight: int=?,
    ~grow: int=?,
    ~shrink: int=?,
    ~size: int=?,
    ~width: int=?,
    ~height: int=?,
    ~minWidth: int=?,
    ~maxWidth: int=?,
    ~minHeight: int=?,
    ~maxHeight: int=?,
    ~alignSelf: string=?,
    ~alignItems: string=?,
    ~justifyContent: string=?,
    ~row: bool=?,
    ~wrap: bool=?,
    ~extend: Fela.style=?
  ) =>
  React.element =
  "default";