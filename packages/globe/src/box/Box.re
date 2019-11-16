open ResponsiveProps;
open ReactUtils;
open OptionUtils;

type domProps;
external toDomProps: option(domProps) => Js.t('a) = "%identity";

module BaseBox = {
  [@bs.module "./index.js"] [@react.component]
  external make:
    (
      ~_as: string=?,
      ~ref: Js.Nullable.t(React.Ref.t('a))=?,
      ~children: React.element=?,
      ~space: responsive=?,
      ~padding: responsive=?,
      ~paddingTop: responsive=?,
      ~paddingLeft: responsive=?,
      ~paddingBottom: responsive=?,
      ~paddingRight: responsive=?,
      ~margin: responsive=?,
      ~marginTop: responsive=?,
      ~marginLeft: responsive=?,
      ~marginBottom: responsive=?,
      ~marginRight: responsive=?,
      ~grow: responsive=?,
      ~shrink: responsive=?,
      ~size: responsive=?,
      ~width: responsive=?,
      ~height: responsive=?,
      ~minWidth: responsive=?,
      ~maxWidth: responsive=?,
      ~minHeight: responsive=?,
      ~maxHeight: responsive=?,
      ~alignSelf: responsive=?,
      ~alignItems: responsive=?,
      ~alignContent: responsive=?,
      ~justifyContent: responsive=?,
      ~row: responsive=?,
      ~wrap: responsive=?,
      ~display: responsive=?,
      ~extend: Fela.style=?,
      ~domProps: Js.t('a)=?
    ) =>
    React.element =
    "default";
};

[@react.component]
let make =
  React.forwardRef(
    (
      ~padding=?,
      ~paddingLeft=?,
      ~paddingRight=?,
      ~paddingBottom=?,
      ~paddingTop=?,
      ~margin=?,
      ~marginTop=?,
      ~marginBottom=?,
      ~marginLeft=?,
      ~marginRight=?,
      ~grow=?,
      ~shrink=?,
      ~size=?,
      ~width=?,
      ~height=?,
      ~minWidth=?,
      ~maxWidth=?,
      ~minHeight=?,
      ~maxHeight=?,
      ~children=?,
      ~_as=?,
      ~space=?,
      ~alignSelf=?,
      ~alignItems=?,
      ~alignContent=?,
      ~justifyContent=?,
      ~display=?,
      ~row=?,
      ~wrap=?,
      ~extend=?,
      ~domProps=?,
      ref,
    ) =>
    <BaseBox
      ref
      ?_as
      ?extend
      domProps={toDomProps(domProps)}
      space={toResponsive(space)}
      alignSelf={toResponsive(alignSelf)}
      alignItems={toResponsive(alignItems)}
      alignContent={toResponsive(alignContent)}
      justifyContent={toResponsive(justifyContent)}
      display={toResponsive(display)}
      row={toResponsive(row)}
      wrap={toResponsive(wrap)}
      padding={toResponsive(padding)}
      paddingLeft={toResponsive(paddingLeft)}
      paddingRight={toResponsive(paddingRight)}
      paddingBottom={toResponsive(paddingBottom)}
      paddingTop={toResponsive(paddingTop)}
      margin={toResponsive(margin)}
      marginLeft={toResponsive(marginLeft)}
      marginRight={toResponsive(marginRight)}
      marginBottom={toResponsive(marginBottom)}
      marginTop={toResponsive(marginTop)}
      grow={toResponsive(grow)}
      shrink={toResponsive(shrink)}
      size={toResponsive(size)}
      width={toResponsive(width)}
      height={toResponsive(height)}
      minWidth={toResponsive(minWidth)}
      minHeight={toResponsive(minHeight)}
      maxWidth={toResponsive(maxWidth)}
      maxHeight={toResponsive(maxHeight)}>
      {resolveOption(children, c => c, n)}
    </BaseBox>
  );