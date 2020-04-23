open OptionUtils;
open ReactUtils;

[@react.component]
let make = (~extend=?, ~style=?, ~children) => {
  let css = ReactFela.useFela1();

  <div
    ?style
    className={cls(
      collapseOption([
        resolveOption(extend, e => Some(css(e)), None),
        Some(ScrollViewStyle.scrollView()),
      ]),
    )}>
    children
  </div>;
};