type context = string => unit;

let defaultContext: context = id => ();
let context = React.createContext(defaultContext);

module Provider = {
  let makeProps = (~value, ~children, ()) => {
    "value": value,
    "children": children,
  };

  let make = React.Context.provider(context);
};