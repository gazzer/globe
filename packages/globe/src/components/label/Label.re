open ReactUtils;

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
  <label
    htmlFor
    className={cls([
      LabelStyle.label(
        ~cursor=pointer && !disabled ? "pointer" : "inherit",
        (),
      ),
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