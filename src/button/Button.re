open Utils;

[@bs.deriving jsConverter]
type type_ =
  | Button
  | Submit;

let type_ = {"Button": type_ToJs(Button), "Submit": type_ToJs(Submit)};

let intent = {
  "Inline": ButtonStyle.intentToJs(ButtonStyle.Inline),
  "Outline": ButtonStyle.intentToJs(ButtonStyle.Outline),
  "Text": ButtonStyle.intentToJs(ButtonStyle.Text),
  "Block": ButtonStyle.intentToJs(ButtonStyle.Block),
};

let size = {
  "Big": ButtonStyle.sizeToJs(ButtonStyle.Big),
  "Normal": ButtonStyle.sizeToJs(ButtonStyle.Normal),
  "Small": ButtonStyle.sizeToJs(ButtonStyle.Small),
};

let variant = {
  "Primary": ButtonStyle.variantToJs(ButtonStyle.Primary),
  "Destructive": ButtonStyle.variantToJs(ButtonStyle.Destructive),
};

[@react.component]
let make =
    (
      ~size=ButtonStyle.Normal,
      ~variant=ButtonStyle.Primary,
      ~intent=ButtonStyle.Block,
      ~loading=false,
      ~type_=Button,
      ~disabled=?,
      ~onClick=?,
      ~onMouseDown=?,
      ~href=?,
      ~style=?,
      ~text=?,
      ~children=?,
    ) => {
  let css = ReactFela.useFela();

  if (loading) {
    <button
      ?disabled
      ?style
      type_="button"
      className={css([
        ButtonStyle.button(~variant, ~intent, ()),
        ButtonStyle.buttonText(~size, ~variant, ~intent, ()),
      ])}>
      <div style={ReactDOMRe.Style.make(~flexDirection="column", ())}>
        <div
          style={ReactDOMRe.Style.make(
            ~flexDirection="row",
            ~justifyContent="center",
            ~alignItems="center",
            (),
          )}>
          {{js| |js} |> s}
          <Loading
            size=15
            color={resolveOption(
              disabled,
              _ =>
                switch (intent) {
                | ButtonStyle.Block
                | ButtonStyle.Inline => "rgb(240, 240, 240)"
                | ButtonStyle.Outline
                | ButtonStyle.Text => "rgb(190, 190, 190)"
                },
              switch (intent) {
              | ButtonStyle.Block
              | ButtonStyle.Inline => "white"
              | ButtonStyle.Outline
              | ButtonStyle.Text =>
                switch (variant) {
                | ButtonStyle.Primary => "rgb(0, 176, 164)"
                | ButtonStyle.Destructive => "rgb(209, 50, 90)"
                }
              },
            )}
          />
          {{js| |js} |> s}
        </div>
        <div
          style={ReactDOMRe.Style.make(
            ~opacity="0",
            ~lineHeight="0",
            ~flexDirection="row",
            ~flexWrap="nowrap",
            ~whiteSpace="nowrap",
            (),
          )}>
          {resolveOption(
             children,
             children => children,
             resolveOption(text, t => t, "") |> s,
           )}
        </div>
      </div>
    </button>;
  } else if (href !== None) {
    <Next.Link ?href>
      <a
        ?style
        ?disabled
        className={css([
          ButtonStyle.button(~variant, ~intent, ()),
          ButtonStyle.buttonText(~size, ~variant, ~intent, ()),
        ])}>
        {resolveOption(children, children => children, n)}
      </a>
    </Next.Link>;
  } else {
    switch (type_) {
    | Button =>
      <button
        ?disabled
        type_="button"
        ?onMouseDown
        ?onClick
        ?style
        className={css([
          ButtonStyle.button(~variant, ~intent, ()),
          ButtonStyle.buttonText(~size, ~variant, ~intent, ()),
        ])}>
        {resolveOption(children, children => children, n)}
      </button>
    | Submit =>
      <input
        ?disabled
        ?style
        type_="submit"
        value=?text
        className={css([
          ButtonStyle.button(~variant, ~intent, ()),
          ButtonStyle.buttonText(~size, ~variant, ~intent, ()),
        ])}
      />
    };
  };
};