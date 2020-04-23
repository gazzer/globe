open ReactUtils;
open OptionUtils;

[@react.component]
let make =
    (~children=?, ~style=?, ~className=?, ~extend=?, ~size=12, ~as_="div") => {
  let css = ReactFela.useFela1();

  let width = Js.Float.toString(float_of_int(size) /. 12. *. 100.) ++ "%";

  ReactDOMRe.createDOMElementVariadic(
    as_,
    ~props=
      ReactDOMRe.domProps(
        ~className=
          cls(
            collapseOption([
              Some(ColStyle.col()),
              Some(
                css(
                  Fela.style({
                    "@media (min-width: 1024px)": {
                      "flexBasis": width,
                      "maxWidth": width,
                    },
                  }),
                ),
              ),
              Some(ColStyle.col()),
              className,
              resolveOption(extend, e => Some(css(e)), None),
            ]),
          ),
        ~style?,
        (),
      ),
    [|resolveOption(children, c => c, n)|],
  );
};