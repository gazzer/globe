open Utils;

[@bs.deriving jsConverter]
type position =
  | Before
  | After;

let position = {
  "Before": positionToJs(Before),
  "After": positionToJs(After),
};

[@react.component]
let make = (~children, ~mask, ~position=Before) => {
  let css = ReactFela.useFela();
  let css1 = ReactFela.useFela1();

  let maskElement =
    <div
      className={css([
        InputMaskStyle.mask(
          ~position={
            switch (position) {
            | Before => InputMaskStyle.Before
            | After => InputMaskStyle.After
            };
          },
          (),
        ),
        InputMaskStyle.maskText(),
      ])}>
      mask->s
    </div>;

  <div className={css1(InputMaskStyle.container())}>
    {switch (position) {
     | Before => maskElement
     | After => n
     }}
    <div
      className={css1(
        Fela.style({
          "flex": "1 1 auto",
          "> input": {
            "borderRadius":
              switch (position) {
              | Before => "0 7px 7px 0"
              | After => "7px 0 0 7px"
              },
            "paddingLeft":
              switch (position) {
              | Before => "4px"
              | After => "15px"
              },
            "paddingRight":
              switch (position) {
              | After => "4px"
              | Before => "15px"
              },
          },
        }),
      )}>
      children
    </div>
    {switch (position) {
     | Before => n
     | After => maskElement
     }}
  </div>;
};