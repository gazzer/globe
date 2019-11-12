open Utils;

[@react.component]
let make =
  React.forwardRef(
    (
      ~href=?,
      ~disabled=false,
      ~children,
      ~onClick=?,
      ~style=?,
      ~line=LinkStyle.Show,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela();
    let status = disabled ? Some(LinkStyle.Disabled) : None;

    <a
      ?onClick
      ?style
      ref=?{ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)}
      href=?{disabled ? None : href}
      className={css([
        LinkStyle.link(~status?, ~line, ()),
        LinkStyle.linkText(~status?, ()),
      ])}>
      children
    </a>;
  });