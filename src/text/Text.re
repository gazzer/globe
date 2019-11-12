open Utils;

[@bs.deriving jsConverter]
type variant =
  | Title
  | Subtitle
  | Category
  | Body
  | Label;

let variant = {
  "Title": variantToJs(Title),
  "Subtitle": variantToJs(Subtitle),
  "Category": variantToJs(Category),
  "Body": variantToJs(Body),
  "Label": variantToJs(Label),
};

[@bs.deriving jsConverter]
type intent =
  | Info;

let intent = {"Info": intentToJs(Info)};

[@react.component]
let make = (~intent=?, ~variant=Body, ~as_=?, ~style=?, ~extend=?, ~children) => {
  let css = ReactFela.useFela2();
  let theme = ReactFela.useTheme();

  let options =
    switch (variant) {
    | Title => theme##typography##title
    | Subtitle => theme##typography##subtitle
    | Category => theme##typography##category
    | Label => theme##typography##label
    | Body => theme##typography##body
    };

  let el =
    switch (as_) {
    | Some(el) => el
    | None => options##element
    };

  let lineHeightScale = options##lineHeight /. options##fontSize;

  let typeOffset =
    (lineHeightScale -. 1.) /. 2. +. options##descenderHeightScale;
  let topSpace =
    options##lineHeight -. options##capHeightScale *. options##fontSize;

  let heightCorrection =
    topSpace > theme##baselineGrid
      ? int_of_float(
          topSpace -. mod_float(topSpace, float_of_int(theme##baselineGrid)),
        )
      : 0;

  ReactDOMRe.createDOMElementVariadic(
    el,
    ~props=
      ReactDOMRe.domProps(
        ~className=
          css(
            Fela.style({
              "fontSize": options##fontSize,
              "lineHeight": options##lineHeight ++ "px",
              "fontFamily": resolveOption(options##fontFamily, f => f, None),
              "fontWeight": resolveOption(options##fontWeight, f => f, None),
              "textTransform":
                intent === Some(Info) ? Some("uppercase") : None,
              "userSelect": variant === Label ? "none" : "initial",
              "color": variant === Label ? Some("rgb(100, 100, 100)") : None,
              "transform":
                "translateY(" ++ string_of_float(typeOffset) ++ "em)",
              "paddingTop": 0.000005,
              ":before": {
                "content": "''",
                "marginTop": - heightCorrection,
                "display": "block",
                "height": 0,
              },
            }),
            extend,
          ),
        ~style?,
        (),
      ),
    [|children|],
  );
};