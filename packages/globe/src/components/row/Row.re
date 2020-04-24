let align = {
  "Center": RowStyle.alignToJs(RowStyle.Center),
  "Start": RowStyle.alignToJs(RowStyle.Start),
  "End": RowStyle.alignToJs(RowStyle.End_),
};

[@react.component]
let make = (~children, ~style=?, ~align=RowStyle.Start) => {
  <div ?style className={RowStyle.row(~align, ())}> children </div>;
};