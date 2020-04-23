open OptionUtils;
open ReactUtils;

external childrenToString: React.element => string = "%identity";

[@react.component]
let make =
  React.forwardRef(
    (
      ~href=?,
      ~disabled=false,
      ~title=?,
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
      title={resolveOption(title, t => t, childrenToString(children))}
      ref=?{ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)}
      href=?{disabled ? None : href}
      className={cls([
        LinkStyle.link(~status?, ~line, ()),
        LinkStyle.linkText(~status?, ()),
      ])}>
      children
    </a>;
  });