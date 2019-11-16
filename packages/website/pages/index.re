open ReactUtils;

open Globe;
open ResponsiveProps;

[@react.component]
let make = () =>
  <Box padding={Int(10)} space={Int(10)}>
    <a href="/storybook/index.html"> "Storybook"->s </a>
    <a href="/playroom/index.html"> "Playroom"->s </a>
  </Box>;

let default = make;