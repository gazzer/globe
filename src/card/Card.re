open Utils;

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
    className={css(
      collapseOption([
        Some(CardStyle.card(~elevation, ())),
        resolveOption(className, c => Some(Fela.raw(c)), None),
        extend,
      ]),
    )}>
    children
  </div>;
};