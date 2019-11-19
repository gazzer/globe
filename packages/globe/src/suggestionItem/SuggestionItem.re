[@react.component]
let make = (~onClick, ~isFocused, ~children) => {
  let css = ReactFela.useFela1();

  <div
    role="menuitem"
    tabIndex=(-1)
    onMouseDown=onClick
    className={css(
      Fela.style({
        "padding": "11px 15px",
        "fontSize": 18,
        "lineHeight": 1.25,
        "cursor": "pointer",
        "backgroundColor": isFocused ? Some("rgb(245, 245, 245)") : None,

        "borderBottom": "1px solid rgb(220, 220, 220)",
        ":last-child": {
          "borderBottom": 0,
        },
        ":hover": {
          "backgroundColor": "rgb(245, 245, 245)",
        },
      }),
    )}>
    children
  </div>;
};