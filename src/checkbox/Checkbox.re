open ReactUtils;

[@genType]
[@react.component]
let make =
  React.forwardRef(
    (
      ~name,
      ~disabled=?,
      ~label=?,
      ~error=?,
      ~required: bool=?,
      ~onBlur=?,
      ~onFocus=?,
      ~checked=false,
      ~isValid=true,
      ~onChange: bool => unit,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela1();

    <Box space=1>
      <Box row=true alignItems="center" space=1>
        <input
          ref=?{
            ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)
          }
          type_="checkbox"
          checked
          onChange={_ => onChange(!checked)}
          onKeyPress={event => {
            ReactEvent.Synthetic.preventDefault(event);

            let key = ReactEvent.Keyboard.keyCode(event);
            let which = ReactEvent.Keyboard.which(event);
            let keyCode = key !== 0 ? key : which;

            if (keyCode === 13) {
              onChange(!checked);
            };
          }}
          name
          id=name
          ?disabled
          ?onFocus
          ?onBlur
          // ?required
          className={css(
            CheckboxStyle.checkbox(
              ~validation=?isValid ? None : Some(CheckboxStyle.Invalid),
              (),
            ),
          )}
        />
        {switch (label) {
         | Some(label) =>
           <Label ?disabled pointer=true htmlFor=name> label </Label>
         | None => n
         }}
      </Box>
      {switch (error) {
       | Some(error) => <Warning> error </Warning>
       | None => n
       }}
    </Box>;
  });