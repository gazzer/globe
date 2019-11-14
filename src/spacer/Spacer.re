open ReactUtils;
open OptionUtils;

[@react.component]
let make = (~size, ~desktopSize=?) => {
  let css = ReactFela.useFela1();
  let theme = ReactFela.useTheme();
  let siz = string_of_int(size * theme##baselineGrid) ++ "px";

  <div
    className={css(
      SpacerStyle.spacer(
        ~size=siz,
        ~desktopSize={
          resolveOption(
            desktopSize,
            s => string_of_int(s * theme##baselineGrid) ++ "px",
            siz,
          );
        },
        (),
      ),
    )}
  />;
};