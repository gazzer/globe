open ReactUtils;
open OptionUtils;

[@react.component]
let make =
    (~children=?, ~style=?, ~className=?, ~extend=?, ~size=12, ~as_="div") => {
  let css = ReactFela.useFela();

  ReactDOMRe.createDOMElementVariadic(
    as_,
    ~props=
      ReactDOMRe.domProps(
        ~className=
          css(
            collapseOption([
              Some(
                ColStyle.col(
                  ~width={
                    Js.Float.toString(float_of_int(size) /. 12. *. 100.)
                    ++ "0%";
                  },
                  (),
                ),
              ),
              resolveOption(className, c => Some(Fela.raw(c)), None),
              extend,
            ]),
          ),
        ~style?,
        (),
      ),
    [|resolveOption(children, c => c, n)|],
  );
};