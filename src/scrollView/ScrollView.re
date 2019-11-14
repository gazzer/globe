open ReactUtils;
open OptionUtils;

[@react.component]
let make = (~extend=?, ~style=?, ~children) => {
  let css = ReactFela.useFela();

  <div
    ?style
    className={css(
      collapseOption([extend, Some(ScrollViewStyle.scrollView())]),
    )}>
    children
  </div>;
};