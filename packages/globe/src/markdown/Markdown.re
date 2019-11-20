open ResponsiveProps;

module MarkdownPreview = {
  [@bs.module "markdown-to-jsx"] [@react.component]
  external make: (~children: string, ~options: Js.t('a)=?) => React.element =
    "default";
};

let overrides = {
  "h1": (props: {. children: React.element}) =>
    <Text intent=Text.Title> {props##children} </Text>,

  "h2": (props: {. children: React.element}) =>
    <Text intent=Text.Subtitle extend={Fela.style({"marginTop": 16})}>
      {props##children}
    </Text>,

  "h3": (props: {. children: React.element}) =>
    <Text intent=Text.Category extend={Fela.style({"marginTop": 16})}>
      {props##children}
    </Text>,

  "h4": (props: {. children: React.element}) =>
    <Text _as="h4" intent=Text.Body extend={Fela.style({"marginTop": 16})}>
      {props##children}
    </Text>,

  "h5": (props: {. children: React.element}) =>
    <Text _as="h5" intent=Text.Label extend={Fela.style({"marginTop": 16})}>
      {props##children}
    </Text>,
  "h6": (props: {. children: React.element}) =>
    <Text
      _as="h6"
      intent=Text.Label
      extend={Fela.style({"marginTop": 16, "color": "rgb(100, 100, 100)"})}>
      {props##children}
    </Text>,

  "p": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <Text intent=Text.Body> {props##children} </Text>;
  },
  "ul": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <ul className={css(Fela.style({"paddingLeft": 19}))}>
      {props##children}
    </ul>;
  },
  "blockquote": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <blockquote
      className={css(
        Fela.style({
          "padding": "9px 8px 8px 12px",
          "borderLeft": "4px solid rgb(180, 180, 180)",

          "marginBottom": 4,
          "& p": {
            "color": "rgb(100,100,100)",
          },
        }),
      )}>
      {props##children}
    </blockquote>;
  },
  "ol":
    (
      props: {
        .
        children: React.element,
        start: int,
      },
    ) => {
    let css = ReactFela.useFela1();

    <ol
      start={
        props##start;
      }
      className={css(Fela.style({"paddingLeft": 26}))}>
      {props##children}
    </ol>;
  },
  "li": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <Text
      intent=Text.Body
      extend={Fela.style({"display": "list-item", "lineHeight": "22px"})}>
      {props##children}
    </Text>;
  },
  "td":
    (
      props: {
        .
        children: React.element,
        style: ReactDOMRe.style,
      },
    ) => {
    let css = ReactFela.useFela1();

    <td
      className={css(
        Fela.style({
          "display": "flex",
          "flex": "1 1 0",
          "padding": "8px 12px",
          "borderRight": "1px solid rgb(180, 180, 180)",
          "borderBottom": "1px solid rgb(180, 180, 180)",
          ":first-child": {
            "borderLeft": "1px solid rgb(180, 180, 180)",
          },
        }),
      )}
      style={
        props##style;
      }>
      <Text intent=Text.Body> {props##children} </Text>
    </td>;
  },
  "th": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <th
      className={css(
        Fela.style({
          "display": "flex",
          "flex": "1 1 0",
          "padding": "8px 12px",
          "backgroundColor": "rgb(250, 250, 250)",
          "borderTop": "1px solid rgb(180, 180, 180)",
          "borderRight": "1px solid rgb(180, 180, 180)",
          "borderBottom": "2px solid rgb(180, 180, 180)",
          ":first-child": {
            "borderLeft": "1px solid rgb(180, 180, 180)",
          },
        }),
      )}>
      <Text intent=Text.Body> {props##children} </Text>
    </th>;
  },
  "tr": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <tr
      className={css(
        Fela.style({
          "display": "flex",
          "flex": "1 1 auto",
          "flexDirection": "row",
        }),
      )}>
      {props##children}
    </tr>;
  },
  "table": (props: {. children: React.element}) => {
    let css = ReactFela.useFela1();

    <table
      className={css(
        Fela.style({
          "display": "flex",
          "flex": "1 1 auto",
          "flexDirection": "column",
        }),
      )}>
      {props##children}
    </table>;
  },
  "hr": () =>
    <Box marginBottom={Int(4)} marginTop={Int(4)}>
      <Line size=1 color="rgb(180, 180, 180)" />
    </Box>,
  "br": () => <Box height={Int(18)} />,
  "a":
    (
      props: {
        .
        children: React.element,
        href: string,
        title: string,
      },
    ) =>
    <Link
      title={
        props##title;
      }
      href={
        props##href;
      }>
      {props##children}
    </Link>,
  "img":
    (
      props: {
        .
        src: string,
        alt: string,
        title: string,
      },
    ) => {
    let css = ReactFela.useFela1();

    <img
      title={
        props##title;
      }
      alt={
        props##alt;
      }
      src={
        props##src;
      }
      className={css(Fela.style({"maxWidth": "100%"}))}
    />;
  },
};

[@react.component]
let make = (~value) =>
  <MarkdownPreview options={"overrides": overrides}> value </MarkdownPreview>;