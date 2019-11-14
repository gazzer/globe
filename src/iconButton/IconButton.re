let variant = {
  "Primary": IconButtonStyle.variantToJs(IconButtonStyle.Primary),
  "Destructive": IconButtonStyle.variantToJs(IconButtonStyle.Destructive),
};

[@react.component]
let make = (~children, ~variant=IconButtonStyle.Primary, ~disabled=?) => {
  let css = ReactFela.useFela();

  <button
    ?disabled
    className={css([
      IconButtonStyle.iconButton(~variant, ()),
      IconButtonStyle.iconButtonText(),
      Fela.style({
        "& path": {
          "fill": "white",
        },
      }),
    ])}>
    children
  </button>;
};