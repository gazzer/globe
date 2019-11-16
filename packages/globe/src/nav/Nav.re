open OptionUtils;

[@react.component]
let make = (~children, ~style=?, ~extend=?) => {
  let css = ReactFela.useFela();

  <div className={css([NavStyle.container()])}>
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
        className={css(collapseOption([Some(NavStyle.nav()), extend]))}>
        children
      </nav>
    </Grid>
  </div>;
};