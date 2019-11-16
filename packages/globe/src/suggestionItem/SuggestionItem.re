[@react.component]
let make = (~onClick, ~isFocused, ~children) => {
  let css = ReactFela.useFela1();

  <div
    role="menuitem"
    tabIndex=(-1)
    onMouseDown=onClick
    className={css(
      Fela.style({
        "padding": "10px 15px",
        "fontSize": 18,
        "cursor": "pointer",
        "background": isFocused ? Some("rgb(245, 245, 245)") : None,

        "borderBottom": "1px solid rgb(220, 220, 220)",
        ":last-child": {
          "borderBottom": 0,
        },
      }),
    )}>
    children
  </div>;
};