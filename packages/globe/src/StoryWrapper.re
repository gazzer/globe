open Fela;

let staticStylesPlayroom = [|
  ("::-webkit-scrollbar", style({"display": "none"})),
  (
    "input, textarea, button, select option, a",
    style({"fontFamily": "inherit", "outline": 0}),
  ),
  ("a:focus", style({"boxShadow": "0 0 0 2pt rgb(60, 206, 194)"})),
  ("a:hover:focus, a:active:focus", style({"boxShadow": "none !important"})),
  (
    "div, form",
    style({
      "display": "flex",
      "alignSelf": "stretch",
      "flexDirection": "column",
      "flexShrink": 0,
      "maxWidth": "100%",
      "boxSizing": "border-box",
      "WebkitOverflowScrolling": "touch",
    }),
  ),
  (
    "html, #__next",
    style({
      "WebkitTextSizeAdjust": "100%",
      "position": "fixed",
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 0,
      "overflow": "hidden",
      "maxHeight": "100vh",
    }),
  ),
  (
    "body",
    style({"height": "100%", "maxHeight": "100%", "overflow": "hidden"}),
  ),
  ("body", style({"backgroundColor": "rgb(245, 245, 245)"})),
|];

let staticStylesStorybook = [|
  (
    "input, textarea, button, select option, a",
    style({"fontFamily": "inherit", "outline": 0}),
  ),
  ("a:focus", style({"boxShadow": "0 0 0 2pt rgb(60, 206, 194)"})),
  ("a:hover:focus, a:active:focus", style({"boxShadow": "none !important"})),
  ("body", style({"backgroundColor": "rgb(245, 245, 245)"})),
  (
    "div, form",
    style({
      "display": "flex",
      "alignSelf": "stretch",
      "flexDirection": "column",
      "flexShrink": 0,
      "maxWidth": "100%",
      "boxSizing": "border-box",
      "WebkitOverflowScrolling": "touch",
    }),
  ),
|];

let renderer = FelaRenderer.make();

[@react.component]
let make = (~children, ~isStorybook=false) => {
  <div id={isStorybook ? "" : "__next"}>
    <StyleProvider
      renderer
      staticStyles={isStorybook ? staticStylesStorybook : staticStylesPlayroom}>
      children
    </StyleProvider>
  </div>;
};
let default = make;