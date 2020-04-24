open OptionUtils;
open ReactUtils;

let elevation = {
  "Minimal": CardStyle.elevationToJs(CardStyle.Minimal),
  "Low": CardStyle.elevationToJs(CardStyle.Low),
  "Medium": CardStyle.elevationToJs(CardStyle.Medium),
  "High": CardStyle.elevationToJs(CardStyle.High),
};

[@react.component]
let make =
    (~children, ~style=?, ~className=?, ~extend=?, ~elevation=CardStyle.Low) => {
  let css = ReactFela.useFela();

  <div
    ?style
    className={cls(
      collapseOption([
        Some(CardStyle.card(~elevation, ())),
        className,
        extend,
      ]),
    )}>
    children
  </div>;
};