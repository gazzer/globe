open ReactUtils;
open OptionUtils;

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
      ~label=?,
      ~error=?,
    ) => {
  let css = ReactFela.useFela1();

  <Box space=1 grow=1 shrink=1>
    {switch (label) {
     | Some(label) =>
       <Label ?disabled pointer=true htmlFor=name> label </Label>
     | None => n
     }}
    <Box row=true space=1 grow=1 shrink=1>
      <Button
        ?disabled
        intent=ButtonStyle.Text
        size=ButtonStyle.Small
        style={ReactDOMRe.Style.make(
          ~padding="8px",
          ~minWidth="unset",
          ~flexGrow="0",
          ~alignSelf="center",
          (),
        )}
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
      <TextInput
        ?disabled
        ?isValid
        ?required
        name
        type_="number"
        ?min
        ?max
        style={ReactDOMRe.Style.make(~flexGrow="1", ())}
        value={string_of_int(value)}
        onChange={value =>
          onChange(String.length(value) > 0 ? int_of_string(value) : 0)
        }
      />
      <Button
        ?disabled
        intent=ButtonStyle.Text
        size=ButtonStyle.Small
        style={ReactDOMRe.Style.make(
          ~padding="8px",
          ~minWidth="unset",
          ~flexGrow="0",
          ~alignSelf="center",
          (),
        )}
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
    </Box>
    {switch (error) {
     | Some(error) => <Warning> error </Warning>
     | None => n
     }}
  </Box>;
};