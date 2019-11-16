open OptionUtils;
open ReactFela;

let fallbackRenderer = FelaRenderer.make();

[@bs.module "../themes/gazzer.js"] external gazzerTheme: Js.t('a) = "default";

external toRenderer: Js.t('a) => Fela.renderer = "%identity";

[@react.component]
let make = (~children, ~renderer=?, ~theme=gazzerTheme, ~staticStyles=?) => {
  let currentRenderer = resolveOption(renderer, r => r, fallbackRenderer);

  switch (staticStyles) {
  | Some(styles) =>
    styles->Belt.Array.map(((selector, style)) =>
      currentRenderer##renderStatic(style, selector)
    )
    |> ignore
  | None => ()
  };

  <>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap"
      rel="stylesheet"
    />
    <RendererProvider renderer={toRenderer(currentRenderer)}>
      <ThemeProvider theme> children </ThemeProvider>
    </RendererProvider>
  </>;
};