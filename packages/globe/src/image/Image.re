open OptionUtils;

[@react.component]
let make =
    (~src, ~height, ~extend=?, ~maxHeight=height, ~width, ~alt=?, ~style=?) => {
  let css = ReactFela.useFela();

  <img
    src
    ?alt
    ?style
    className={css(
      collapseOption([
        Some(ImageStyle.image(~height, ~width, ~maxHeight, ())),
        extend,
      ]),
    )}
  />;
};