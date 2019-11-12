let layout = {
  "Spread": TabNavStyle.layoutToJs(TabNavStyle.Spread),
  "Center": TabNavStyle.layoutToJs(TabNavStyle.Center),
  "Left": TabNavStyle.layoutToJs(TabNavStyle.Left),
  "Right": TabNavStyle.layoutToJs(TabNavStyle.Right),
};

[@react.component]
let make = (~children, ~onChange, ~style=?, ~layout=TabNavStyle.Center) => {
  let css = ReactFela.useFela1();

  let childLayout =
    switch (layout) {
    | Spread => TabNavItemStyle.Spread
    | Center => TabNavItemStyle.Center
    | Left => TabNavItemStyle.Left
    | Right => TabNavItemStyle.Right
    };

  let context: TabNavContext.context = {onChange, layout: childLayout};

  <TabNavContext.Provider value=context>
    <nav ?style className={css(TabNavStyle.tabNav(~layout, ()))}>
      children
    </nav>
  </TabNavContext.Provider>;
};