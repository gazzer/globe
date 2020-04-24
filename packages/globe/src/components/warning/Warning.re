open ReactUtils;

[@react.component]
let make = (~children) =>
  <span className={cls([WarningStyle.warning(), WarningStyle.warningText()])}>
    children
  </span>;