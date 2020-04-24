open ResponsiveProps;

module BaseSpacer = {
  [@bs.module "./index.js"] [@react.component]
  external make: (~size: responsive=?) => React.element = "default";
};

[@react.component]
let make = (~size=?) => <BaseSpacer size={toResponsive(size)} />;