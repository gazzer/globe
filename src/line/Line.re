[@react.component]
let make = (~color="rgb(200, 200, 200)", ~size=1) => {
  let css = ReactFela.useFela1();

  <div
    className={css(
      LineStyle.line(
        ~color,
        ~size={
          string_of_int(size) ++ "px";
        },
        (),
      ),
    )}
  />;
};