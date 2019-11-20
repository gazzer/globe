open ReactUtils;
open OptionUtils;

[@bs.deriving jsConverter]
type type_ =
  | Button
  | Submit;

let type_ = {"Button": type_ToJs(Button), "Submit": type_ToJs(Submit)};

let intent = {
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
      className={css(
        collapseOption([
          Some(ButtonStyle.button(~variant, ~intent, ())),
          Some(ButtonStyle.buttonText(~size, ~variant, ~intent, ())),
          {
            intent === ButtonStyle.Outline
            && !resolveOption(disabled, d => d, false)
              ? Some(
                  Fela.style({
                    "& svg": {
                      "transition": "150ms fill ease-in-out",
                    },
                    ":hover": {
                      "& svg": {
                        "fill": "white",
                      },
                    },
                    ":active": {
                      "& svg": {
                        "fill": "white",
                      },
                    },
                  }),
                )
              : None;
          },
        ]),
      )}>
      <div style={ReactDOMRe.Style.make(~flexDirection="column", ())}>
        <div
          style={ReactDOMRe.Style.make(
            ~flexDirection="row",
            ~justifyContent="center",
            ~alignItems="center",
            (),
          )}>
          e->s
          <Loading
            size=4
            color={resolveOption(
              disabled,
              _ =>
                switch (intent) {
                | ButtonStyle.Block => "white"
                | ButtonStyle.Outline
                | ButtonStyle.Text => "rgb(190, 190, 190)"
                },
              switch (intent) {
              | ButtonStyle.Block => "white"
              | ButtonStyle.Outline
              | ButtonStyle.Text =>
                switch (variant) {
                | ButtonStyle.Primary => "rgb(0, 176, 164)"
                | ButtonStyle.Destructive => "rgb(209, 50, 90)"
                }
              },
            )}
          />
          e->s
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