open Utils;

[@react.component]
let make =
    (
      ~children,
      ~htmlFor="",
      ~disabled=false,
      ~pointer=false,
      ~optional=false,
      ~required=false,
    ) => {
  let css = ReactFela.useFela();

  <label
    htmlFor
    className={css([
      LabelStyle.label(~cursor=pointer ? "pointer" : "inherit", ()),
      LabelStyle.labelText(
        ~status=?{
          disabled ? Some(LabelStyle.Disabled) : None;
        },
        (),
      ),
    ])}>
    children
    {(optional ? " (optional)" : "") |> s}
  </label>;
};