open ReactUtils;
open OptionUtils;

[@react.component]
let make = (~children, ~style=?, ~extend=?) => {
  let css = ReactFela.useFela();

  <div
    ?style
    className={css(collapseOption([Some(GridStyle.grid()), extend]))}>
    children
  </div>;
};