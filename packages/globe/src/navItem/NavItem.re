open OptionUtils;
open ReactUtils;

[@react.component]
let make = (~children, ~href, ~active=?, ~disabled=false, ~icon, ~extend=?) => {
  let css = ReactFela.useFela1();

  let status =
    resolveOption(
      active,
      active => active ? NavItemStyle.Active : NavItemStyle.Inactive,
      NavItemStyle.Inactive,
    );

  let state = disabled ? NavItemStyle.Disabled : NavItemStyle.Enabled;

  <a
    href
    className={cls(
      collapseOption([
        Some(NavItemStyle.navItem(~status, ~state, ())),
        Some(NavItemStyle.navItemText(~state, ())),
        resolveOption(extend, e => Some(css(e)), None),
      ]),
    )}>
    <div
      className={cls([
        NavItemStyle.navItemIcon(),
        NavItemStyle.navItemIconText(),
        css(Fela.style({
              "& path": {
                fill: "white",
              },
            })),
      ])}>
      icon
    </div>
    children
  </a>;
};