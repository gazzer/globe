let variant = {
  "Primary": IconButtonStyle.variantToJs(IconButtonStyle.Primary),
  "Destructive": IconButtonStyle.variantToJs(IconButtonStyle.Destructive),
};

[@react.component]
let make = (~children, ~variant=IconButtonStyle.Primary, ~disabled=?, ~href=?) => {
  let css = ReactFela.useFela();

  if (href !== None) {
    <Next.Link ?href>
      <a
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
      </a>
    </Next.Link>;
  } else {
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
};