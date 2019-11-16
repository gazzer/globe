let layout = {
  "Spread": TabNavStyle.layoutToJs(TabNavStyle.Spread),
  "Center": TabNavStyle.layoutToJs(TabNavStyle.Center),
  "Start": TabNavStyle.layoutToJs(TabNavStyle.Start),
  "End": TabNavStyle.layoutToJs(TabNavStyle.End_),
};

[@react.component]
let make = (~children, ~onChange, ~style=?, ~layout=TabNavStyle.Center) => {
  let css = ReactFela.useFela1();

  let childLayout =
    switch (layout) {
    | Spread => TabNavItemStyle.Spread
    | Center => TabNavItemStyle.Center
    | Start => TabNavItemStyle.Start
    | End_ => TabNavItemStyle.End_
    };

  let context: TabNavContext.context = {onChange, layout: childLayout};

  <TabNavContext.Provider value=context>
    <nav ?style className={css(TabNavStyle.tabNav(~layout, ()))}>
      children
    </nav>
  </TabNavContext.Provider>;
};