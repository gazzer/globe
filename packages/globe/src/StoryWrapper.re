open Fela;

let staticStyles = [|
  (
    "input, textarea, button, select option, a",
    style({"fontFamily": "inherit", "outline": 0}),
  ),
  ("a:focus", style({"boxShadow": "0 0 0 2pt rgb(60, 206, 194)"})),
  ("a:hover:focus, a:active:focus", style({"boxShadow": "none !important"})),
  ("body", style({"backgroundColor": "rgb(245, 245, 245)"})),
|];

let renderer = FelaRenderer.make();

[@react.component]
let make = (~children) =>
  <StyleProvider renderer staticStyles> children </StyleProvider>;

let default = make;