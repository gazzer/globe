open Utils;

[@react.component]
let make = (~children, ~onChange, ~style=?, ~extend=?) => {
  let css = ReactFela.useFela();

  let context: NavContext.context = onChange;

  <NavContext.Provider value=context>
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
    </div>
  </NavContext.Provider>;
};