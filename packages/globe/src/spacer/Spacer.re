open ResponsiveProps;

[@react.component]
let make = (~size) => {
  let theme = ReactFela.useTheme();

  let resolvedSize =
    switch (size) {
    | Int(i) => Some(Int(i * theme##baselineGrid))
    | Array(arr) =>
      Some(Array(arr->Belt.Array.map(i => i * theme##baselineGrid)))
    | _ => None
    };

  <Box size=?resolvedSize width=?resolvedSize />;
};