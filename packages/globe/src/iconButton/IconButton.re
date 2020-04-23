open ReactUtils;

let variant = {
  "Primary": IconButtonStyle.variantToJs(IconButtonStyle.Primary),
  "Destructive": IconButtonStyle.variantToJs(IconButtonStyle.Destructive),
};

[@react.component]
let make = (~children, ~variant=IconButtonStyle.Primary, ~disabled=?, ~href=?) => {
  let css = ReactFela.useFela1();

  if (href !== None) {
    <Next.Link ?href>
      <a
        ?disabled
        className={cls([
          IconButtonStyle.iconButton(~variant, ()),
          IconButtonStyle.iconButtonText(),
          css(Fela.style({
                "& path": {
                  "fill": "white",
                },
              })),
        ])}>
        children
      </a>
    </Next.Link>;
  } else {
    <button
      ?disabled
      className={cls([
        IconButtonStyle.iconButton(~variant, ()),
        IconButtonStyle.iconButtonText(),
        css(Fela.style({
              "& path": {
                "fill": "white",
              },
            })),
      ])}>
      children
    </button>;
  };
};