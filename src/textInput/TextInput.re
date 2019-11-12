open Utils;

[@react.component]
let make =
  React.forwardRef(
    (
      ~isValid: bool=true,
      ~value: string,
      ~type_: string="text",
      ~name: string,
      // WHY DO I HAVE TO TYPE THOSE?
      ~disabled: option(bool)=?,
      ~min: option(int)=?,
      ~max: option(int)=?,
      ~minLength: option(int)=?,
      ~maxLength: option(int)=?,
      ~step: option(float)=?,
      ~pattern: option(string)=?,
      ~required: option(bool)=?,
      ~placeholder: option(string)=?,
      ~autoComplete=?,
      ~onBlur=?,
      ~onFocus=?,
      ~onKeyDown=?,
      ~onChange: string => unit,
      ~extend: Fela.style=Fela.raw(""),
      ~style: option(ReactDOMRe.style)=?,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela();

    <>
      <input
        ref=?{
          ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)
        }
        id=name
        name
        type_
        ?min
        max=?{resolveOption(max, m => Some(string_of_int(m)), None)}
        ?step
        ?pattern
        ?disabled
        ?placeholder
        ?autoComplete
        ?onBlur
        ?onFocus
        ?onKeyDown
        ?style
        // ?required
        className={css([
          TextInputStyle.input(
            ~validation=?isValid ? None : Some(TextInputStyle.Invalid),
            (),
          ),
          TextInputStyle.inputText(),
          extend,
        ])}
        value
        onChange={event => onChange(ReactEvent.Form.target(event)##value)}
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
         | Some(min) =>
           <span
             style={ReactDOMRe.Style.make(
               ~position="relative",
               ~height="0px",
               ~alignSelf="flex-end",
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
    </>;
  });