open Utils;

[@react.component]
let make =
    (
      ~value,
      ~onChange,
      ~name,
      ~min=?,
      ~max=?,
      ~required=?,
      ~isValid=?,
      ~disabled=?,
    ) => {
  let css = ReactFela.useFela1();

  <div className={css(Fela.style({"flexDirection": "row"}))}>
    <div className={css(Fela.style({"alignSelf": "center"}))}>
      <Button
        ?disabled
        intent=ButtonStyle.Text
        size=ButtonStyle.Small
        style={ReactDOMRe.Style.make(~padding="8px", ())}
        onClick={_ =>
          onChange(
            switch (min) {
            | Some(min) => Js.Math.max_int(min, value - 1)
            | None => value - 1
            },
          )
        }>
        <Icons.minus
          fill={resolveOption(
            disabled,
            b => b ? "rgb(190, 190, 190)" : "rgb(0, 176, 174)",
            "rgb(0, 176, 174)",
          )}
          style={ReactDOMRe.Style.make(~fontSize="22px", ())}
        />
      </Button>
    </div>
    <Spacer size=4 />
    <TextInput
      ?disabled
      ?isValid
      ?required
      name
      type_="number"
      ?min
      ?max
      style={ReactDOMRe.Style.make(~width="100px", ())}
      value={string_of_int(value)}
      onChange={value =>
        onChange(String.length(value) > 0 ? int_of_string(value) : 0)
      }
    />
    <Spacer size=4 />
    <div className={css(Fela.style({"alignSelf": "center"}))}>
      <Button
        ?disabled
        intent=ButtonStyle.Text
        size=ButtonStyle.Small
        style={ReactDOMRe.Style.make(~padding="8px", ())}
        onClick={_ =>
          onChange(
            switch (max) {
            | Some(max) => Js.Math.min_int(max, value + 1)
            | None => value + 1
            },
          )
        }>
        <Icons.plus
          fill={resolveOption(
            disabled,
            b => b ? "rgb(190, 190, 190)" : "rgb(0, 176, 174)",
            "rgb(0, 176, 174)",
          )}
          style={ReactDOMRe.Style.make(~fontSize="22px", ())}
        />
      </Button>
    </div>
  </div>;
};