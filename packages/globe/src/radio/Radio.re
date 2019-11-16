open ReactUtils;
open ResponsiveProps;

[@react.component]
let make =
  React.forwardRef(
    (
      ~onChange,
      ~value,
      ~name: string,
      ~checked: bool=false,
      ~label: option(React.element)=?,
      ~error: option(React.element)=?,
      ~required: bool=?,
      ~disabled: option(bool)=?,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela1();

    <Box space={Int(1)}>
      <Box row={Bool(true)} alignItems={String("center")} space={Int(1)}>
        <input
          ref=?{
            ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)
          }
          checked
          ?disabled
          value
          name
          // ?required
          id={name ++ "-" ++ value}
          type_="radio"
          onChange={_ => onChange(value)}
          className={css(RadioStyle.radio())}
          onKeyPress={event => {
            ReactEvent.Synthetic.preventDefault(event);

            let key = ReactEvent.Keyboard.keyCode(event);
            let which = ReactEvent.Keyboard.which(event);
            let keyCode = key !== 0 ? key : which;

            if (keyCode === 13) {
              onChange(value);
            };
          }}
        />
        {switch (label) {
         | Some(label) =>
           <Label ?disabled pointer=true htmlFor={name ++ "-" ++ value}>
             label
           </Label>
         | None => n
         }}
      </Box>
      {switch (error) {
       | Some(error) => <Warning> error </Warning>
       | None => n
       }}
    </Box>;
  });