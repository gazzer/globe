open Utils;

[@react.component]
let make = (~children, ~id, ~active=?, ~disabled=false) => {
  let css = ReactFela.useFela();

  let {onChange, layout}: TabNavContext.context =
    React.useContext(TabNavContext.context);

  let status =
    resolveOption(
      active,
      active => active ? TabNavItemStyle.Active : TabNavItemStyle.Inactive,
      TabNavItemStyle.Inactive,
    );

  let state = disabled ? TabNavItemStyle.Disabled : TabNavItemStyle.Enabled;

  <div
    onClick={_ =>
      if (!disabled) {
        onChange(id);
      }
    }
    className={css([
      TabNavItemStyle.tabNavItem(~status, ~layout, ~state, ()),
      TabNavItemStyle.tabNavItemText(~status, ~state, ()),
    ])}>
    children
  </div>;
};