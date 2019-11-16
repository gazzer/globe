let align = {
  "Center": RowStyle.alignToJs(RowStyle.Center),
  "Start": RowStyle.alignToJs(RowStyle.Start),
  "End": RowStyle.alignToJs(RowStyle.End_),
};

[@react.component]
let make = (~children, ~style=?, ~align=RowStyle.Start) => {
  let css = ReactFela.useFela1();

  <div ?style className={css(RowStyle.row(~align, ()))}> children </div>;
};