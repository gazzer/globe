[@react.component]
let make = (~color="rgba(0, 0, 0, 0.2)", ~size=1, ~width=?) => {
  let css = ReactFela.useFela1();

  <div
    className={css(
      LineStyle.line(
        ~color,
        ~width?,
        ~size={
          string_of_int(size) ++ "px";
        },
        (),
      ),
    )}
  />;
};