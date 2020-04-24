type context = {
  onChange: string => unit,
  layout: TabNavItemStyle.layout,
};

let context =
  React.createContext({onChange: _ => (), layout: TabNavItemStyle.Center});

module Provider = {
  let makeProps = (~value, ~children, ()) => {
    "value": value,
    "children": children,
  };

  let make = React.Context.provider(context);
};