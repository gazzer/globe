open Utils;

[@react.component]
let make = (~children) => {
  let css = ReactFela.useFela();

  <span className={css([WarningStyle.warning(), WarningStyle.warningText()])}>
    children
  </span>;
};