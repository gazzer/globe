open OptionUtils;
open ReactUtils;

[@react.component]
let make =
    (~src, ~height, ~extend=?, ~maxHeight=height, ~width, ~alt=?, ~style=?) => {
  let css = ReactFela.useFela();

  <img
    src
    ?alt
    ?style
    className={cls(
      collapseOption([
        Some(ImageStyle.image(~height, ~width, ~maxHeight, ())),
        extend,
      ]),
    )}
  />;
};