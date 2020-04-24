open ResponsiveProps;

type domProps;
external toDomProps: option(domProps) => Js.t('a) = "%identity";

module BaseText = {
  [@bs.module "./index.js"] [@react.component]
  external make:
    (
      ~_as: string=?,
      ~ref: Js.Nullable.t(React.Ref.t('a))=?,
      ~children: React.element,
      ~domProps: Js.t('a)=?,
      ~extend: Fela.style=?,
      ~style: ReactDOMRe.style=?,
      ~variant: string=?,
      ~intent: string=?,
      ~align: responsive=?,
      ~height: responsive=?,
      ~weight: responsive=?,
      ~color: responsive=?
    ) =>
    React.element =
    "default";
};

type intent =
  | Title
  | Subtitle
  | Category
  | Body
  | Label
  | Note;

let toIntent = intent =>
  switch (intent) {
  | Some(Title) => "title"
  | Some(Subtitle) => "subtitle"
  | Some(Category) => "category"
  | Some(Body)
  | None => "body"
  | Some(Label) => "label"
  | Some(Note) => "note"
  };

type variant =
  | Info;

let toVariant = variant =>
  switch (variant) {
  | Some(Info) => "info"
  | None => ""
  };

[@react.component]
let make =
  React.forwardRef(
    (
      ~align=?,
      ~height=?,
      ~weight=?,
      ~color=?,
      ~variant=?,
      ~intent=?,
      ~_as=?,
      ~extend=?,
      ~style=?,
      ~domProps=?,
      ~children,
      ref,
    ) =>
    <BaseText
      ref
      ?_as
      ?extend
      ?style
      domProps={toDomProps(domProps)}
      height={toResponsive(height)}
      weight={toResponsive(weight)}
      color={toResponsive(color)}
      align={toResponsive(align)}
      variant={toVariant(variant)}
      intent={toIntent(intent)}>
      children
    </BaseText>
  );