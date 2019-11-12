open Utils;

[@react.component]
let make =
    (~children, ~id, ~active=?, ~disabled=false, ~intent=?, ~icon, ~extend=?) => {
  let css = ReactFela.useFela();

  let onChange: NavContext.context = React.useContext(NavContext.context);

  let status =
    resolveOption(
      active,
      active => active ? NavItemStyle.Active : NavItemStyle.Inactive,
      NavItemStyle.Inactive,
    );

  let state = disabled ? NavItemStyle.Disabled : NavItemStyle.Enabled;

  <div
    onClick={_ =>
      if (!disabled) {
        onChange(id);
      }
    }
    className={css(
      collapseOption([
        Some(NavItemStyle.navItem(~status, ~state, ())),
        Some(NavItemStyle.navItemText(~state, ())),
        extend,
      ]),
    )}>
    <div
      className={css([
        NavItemStyle.navItemIcon(),
        NavItemStyle.navItemIconText(),
        Fela.style({
          "& path": {
            fill: "white",
          },
        }),
      ])}>
      icon
    </div>
    children
  </div>;
};