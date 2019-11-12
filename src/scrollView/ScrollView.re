open Utils;

[@react.component]
let make = (~extend=?, ~children) => {
  let css = ReactFela.useFela();

  <div
    className={css(
      collapseOption([extend, Some(ScrollViewStyle.scrollView())]),
    )}>
    children
  </div>;
};