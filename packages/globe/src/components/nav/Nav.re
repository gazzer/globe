open OptionUtils;
open ReactUtils;

[@react.component]
let make = (~children, ~style=?, ~extend=?) => {
  let css = ReactFela.useFela();

  <div className={NavStyle.container()}>
    <Grid
      extend={Fela.style({
        "padding": 0,
        "@media (min-width: 1024px)": {
          "paddingLeft": 16,
          "paddingRight": 16,
        },
      })}>
      <nav
        ?style
        className={cls(
          collapseOption([
            Some(NavStyle.nav()),
            resolveOption(extend, e => Some(css(e)), None),
          ]),
        )}>
        children
      </nav>
    </Grid>
  </div>;
};