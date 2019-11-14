open ReactUtils;

[@react.component]
let make = (~condition, ~children) => {
  condition ? children : n;
};