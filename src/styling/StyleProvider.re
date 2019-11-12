open Utils;
open ReactFela;

let fallbackRenderer = FelaRenderer.make();

[@bs.module "../themes/gazzer.js"] external gazzerTheme: Js.t('a) = "default";

[@react.component]
let make = (~children, ~renderer=?, ~theme=gazzerTheme) => {
  let currentRenderer = resolveOption(renderer, r => r, fallbackRenderer);

  <>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:700,900&display=swap"
      rel="stylesheet"
    />
    <RendererProvider renderer=currentRenderer>
      <ThemeProvider theme> children </ThemeProvider>
    </RendererProvider>
  </>;
};