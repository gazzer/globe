open Fela;
open ReactUtils;

let devMode: bool = [%bs.raw {| process.env.NODE_ENV !== "production" |}];
let systemFonts = "system-ui, -apple-system, BlinkMacSystemFont, Segeo UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif";

[@bs.module "../themes/gazzer.js"] external theme: Js.t('a) = "default";

let staticStyles = [|
  ("*", style({"margin": 0, "padding": 0})),
  // (
  //   "input, textarea, button, select option, a",
  //   style({"fontFamily": "inherit", "outline": 0}),
  // ),
  // ("a:focus", style({"boxShadow": "0 0 0 2pt rgb(60, 206, 194)"})),
  // ("a:hover:focus, a:active:focus", style({"boxShadow": "none !important"})),
  (
    "._v",
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
  ("._t", style({"display": "inline"})),
  // ("address", style({"fontStyle": "normal"})),
  // (
  //   "html",
  //   style({
  //     "WebkitTextSizeAdjust": "100%",
  //     "position": "fixed",
  //     "top": 0,
  //     "right": 0,
  //     "left": 0,
  //     "bottom": 0,
  //     "overflow": "hidden",
  //   }),
  // ),
  // (
  //   "body, #__next",
  //   style({"height": "100%", "maxHeight": "100%", "overflow": "hidden"}),
  // ),
  (
    "body",
    style({
      "WebkitTapHighlightColor": "transparent",
      "WebkitTouchCallout": "none",
      "WebkitTextSizeAdjust": "100%",
      "color": "rgb(50, 50, 50)",
      "fontFamily": systemFonts,
      "overscrollBehavior": "none",
      "fontSize": 16,
    }),
  ),
|];

let make = () => {
  let renderer =
    Renderer.make(
      RendererConfig.make(
        ~plugins=
          [|Plugins.namedKeys(theme##breakpoints), Plugins.rtl("ltr")|]
          ->Belt.Array.concat(Presets.web),
        ~devMode,
        (),
      ),
    );

  staticStyles->Belt.Array.map(((selector, style)) =>
    renderer##renderStatic(style, selector)
  );

  renderer;
};