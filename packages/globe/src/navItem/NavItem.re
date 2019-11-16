open OptionUtils;

[@react.component]
let make = (~children, ~href, ~active=?, ~disabled=false, ~icon, ~extend=?) => {
  let css = ReactFela.useFela();

  let status =
    resolveOption(
      active,
      active => active ? NavItemStyle.Active : NavItemStyle.Inactive,
      NavItemStyle.Inactive,
    );

  let state = disabled ? NavItemStyle.Disabled : NavItemStyle.Enabled;

  <a
    href
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
  </a>;
};