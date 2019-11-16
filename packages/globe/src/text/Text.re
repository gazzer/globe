open ResponsiveProps;

type domProps;
external toDomProps: option(domProps) => Js.t('a) = "%identity";

module BaseText = {
  [@bs.module "./text.js"] [@react.component]
  external make:
    (
      ~_as: string=?,
      ~ref: Js.Nullable.t(React.Ref.t('a))=?,
      ~children: React.element,
      ~domProps: Js.t('a)=?,
      ~extend: Fela.style=?,
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

type variant =
  | Title
  | Subtitle
  | Category
  | Body
  | Label;

let toVariant = variant =>
  switch (variant) {
  | Some(Title) => "title"
  | Some(Subtitle) => "subtitle"
  | Some(Category) => "category"
  | Some(Body)
  | None => "body"
  | Some(Label) => "label"
  };

type intent =
  | Info;

let toIntent = intent =>
  switch (intent) {
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
      ~domProps=?,
      ~children,
      ref,
    ) =>
    <BaseText
      ref
      ?_as
      ?extend
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