open ReactUtils;
open OptionUtils;
open ResponsiveProps;

let resize: string => unit = [%bs.raw
  {| function resize(name) {
            var el = document.getElementsByName(name)[0]
            if (el.offsetHeight < el.scrollHeight) {
            el.style.height = (el.scrollHeight + 10) + "px"
            }
        } |}
];

[@react.component]
let make =
  React.forwardRef(
    (
      ~isValid: bool=true,
      ~value: string,
      ~name: string,
      // WHY DO I HAVE TO TYPE THOSE?
      ~minLength: option(int)=?,
      ~maxLength: option(int)=?,
      ~disabled: option(bool)=?,
      ~required: option(bool)=?,
      ~placeholder: option(string)=?,
      ~onBlur=?,
      ~onFocus=?,
      ~onEnter=?,
      ~onChange: string => unit,
      ~style: option(ReactDOMRe.style)=?,
      ~label: option(React.element)=?,
      ~error: option(React.element)=?,
      ~autoResize: option(bool)=?,
      ref,
    ) => {
    let css = ReactFela.useFela();

    let shouldResize = resolveOption(autoResize, b => b, true);

    React.useEffect(() => {
      if (shouldResize) {
        resize(name);
      };

      None;
    });

    <Box space={Int(1)} grow={Int(1)} shrink={Int(1)}>
      {switch (label) {
       | Some(label) =>
         <Label ?disabled pointer=true htmlFor=name> label </Label>
       | None => n
       }}
      <Box grow={Int(1)} shrink={Int(1)}>
        <textarea
          ref=?{
            ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)
          }
          id=name
          name
          ?disabled
          ?placeholder
          ?onBlur
          ?onFocus
          ?style
          // ?required
          className={css([
            TextInputStyle.input(
              ~validation=?isValid ? None : Some(TextInputStyle.Invalid),
              (),
            ),
            TextInputStyle.inputText(),
            Fela.style({"resize": shouldResize ? Some("none") : None}),
          ])}
          value
          onChange={event => {
            onChange(ReactEvent.Form.target(event)##value);

            if (shouldResize) {
              resize(name);
            };
          }}
          onKeyPress=?{
            switch (onEnter) {
            | Some(action) =>
              Some(
                event => {
                  let key = ReactEvent.Keyboard.keyCode(event);
                  let which = ReactEvent.Keyboard.which(event);
                  let ctrl = ReactEvent.Keyboard.ctrlKey(event);
                  let cmd = ReactEvent.Keyboard.metaKey(event);

                  let keyCode = key !== 0 ? key : which;

                  if ((cmd || ctrl) && keyCode === 13) {
                    action();
                  };
                },
              )
            | None => None
            }
          }
        />
        {switch (maxLength) {
         | Some(max) =>
           <span
             style={ReactDOMRe.Style.make(
               ~position="relative",
               ~alignSelf="flex-end",
               ~height="0px",
               ~top="-18px",
               ~right="5px",
               ~fontSize="12px",
               ~color=
                 {max - Js.String.length(value) < 0
                    ? "rgb(209, 50, 90)" : "grey"},
               (),
             )}>
             {string_of_int(max - Js.String.length(value))->s}
           </span>
         | None =>
           switch (minLength) {
           | Some(_) =>
             <span
               style={ReactDOMRe.Style.make(
                 ~position="relative",
                 ~alignSelf="flex-end",
                 ~height="0px",
                 ~top="-18px",
                 ~right="5px",
                 ~fontSize="12px",
                 ~color="grey",
                 (),
               )}>
               {string_of_int(Js.String.length(value))->s}
             </span>
           | None => n
           }
         }}
      </Box>
      {switch (error) {
       | Some(error) => <Warning> error </Warning>
       | None => n
       }}
    </Box>;
  });