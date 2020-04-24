open OptionUtils;
open ReactUtils;

[@react.component]
let make = (~children, ~style=?, ~extend=?) => {
  let css = ReactFela.useFela1();

  <div
    ?style
    className={cls(
      collapseOption([
        Some(GridStyle.grid()),
        resolveOption(extend, e => Some(css(e)), None),
      ]),
    )}>
    children
  </div>;
};