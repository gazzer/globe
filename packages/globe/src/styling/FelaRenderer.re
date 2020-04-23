open Fela;

let devMode: bool = [%bs.raw {| process.env.NODE_ENV !== "production" |}];
let systemFonts = "system-ui, -apple-system, BlinkMacSystemFont, Segeo UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif";

let staticStyles = [|
  ("*", style({"margin": 0, "padding": 0})),
  // (
  //   "input, textarea, button, select option, a",
  //   style({"fontFamily": "inherit", "outline": 0}),
  // ),
  // ("a:focus", style({"boxShadow": "0 0 0 2pt rgb(60, 206, 194)"})),
  // ("a:hover:focus, a:active:focus", style({"boxShadow": "none !important"})),
  // (
  //   "._v",
  //   style({
  //     "display": "flex",
  //     "flexDirection": "column",
  //     "flexShrink": 1,
  //     "alignItems": "stretch",
  //     "maxWidth": "100%",
  //     "boxSizing": "border-box",
  //     "WebkitOverflowScrolling": "touch",
  //   }),
  // ),
  // ("._t", style({"display": "inline"})),
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

let getMediaQueries = (_, _) => [|"@media (min-width: 1024px)"|];
let responsiveProps = {
  "padding": true,
  "paddingLeft": true,
  "paddingRight": true,
  "paddingBottom": true,
  "paddingTop": true,
  "margin": true,
  "marginLeft": true,
  "marginRight": true,
  "marginBottom": true,
  "marginTop": true,
  "width": true,
  "height": true,
  "minWidth": true,
  "minHeight": true,
  "maxWidth": true,
  "maxHeight": true,
  "flexGrow": true,
  "flexShrink": true,
  "flexBasis": true,
  "color": true,
  "fontWeight": true,
  "lineHeight": true,
  "textAlign": true,
  "alignSelf": true,
  "alignItems": true,
  "alignContent": true,
  "justifyContent": true,
  "flexDirection": true,
  "flexWrap": true,
  "display": true,
};

let make = () => {
  let renderer =
    Renderer.make(
      RendererConfig.make(
        ~enhancers=[|Enhancers.sortMediaQueryMobileFirst()|],
        ~plugins=
          [|
            Plugins.responsiveValue(getMediaQueries, responsiveProps),
            Plugins.namedKeysWithProps(props => {
              let theme = Js.Nullable.toOption(props##theme);

              switch (theme) {
              | Some(theme) => theme##breakpoints
              | None => Js.Obj.empty()
              };
            }),
            Plugins.rtl(None),
          |]
          ->Belt.Array.concat(Presets.web),
        ~devMode,
        (),
      ),
    );

  staticStyles->Belt.Array.map(((selector, style)) =>
    renderer##renderStatic(style, selector)
  )
  |> ignore;

  renderer;
};