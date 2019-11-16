open ReactUtils;
open OptionUtils;
open ResponsiveProps;

[@react.component]
let make =
  React.forwardRef(
    (
      ~isValid: bool=true,
      ~value: string,
      ~type_: string="text",
      ~name: string,
      ~disabled: option(bool)=?,
      ~min: option(int)=?,
      ~max: option(int)=?,
      ~minLength: option(int)=?,
      ~maxLength: option(int)=?,
      ~label: option(React.element)=?,
      ~error: option(React.element)=?,
      ~step: option(float)=?,
      ~pattern: option(string)=?,
      ~required: option(bool)=?,
      ~placeholder: option(string)=?,
      ~maskStart: option(string)=?,
      ~maskEnd: option(string)=?,
      ~autoComplete=?,
      ~onBlur=?,
      ~onFocus=?,
      ~onKeyDown=?,
      ~ariaExpanded=?,
      ~onChange: string => unit,
      ~extend: option(Fela.style)=?,
      ~style: option(ReactDOMRe.style)=?,
      ref,
    ) => {
    let css = ReactFela.useFela();

    <Box space={Int(1)} grow={Int(1)} shrink={Int(1)}>
      {switch (label) {
       | Some(label) =>
         <Label
           ?disabled
           optional={resolveOption(required, r => !r, false)}
           pointer=true
           htmlFor=name>
           label
         </Label>
       | None => n
       }}
      <Box grow={Int(1)} shrink={Int(1)}>
        <Box row={Bool(true)} grow={Int(1)} shrink={Int(1)}>
          {switch (maskStart) {
           | Some(mask) =>
             <div
               className={css([
                 TextInputStyle.mask(~position=TextInputStyle.Start, ()),
                 TextInputStyle.maskText(),
               ])}>
               mask->s
             </div>
           | None => n
           }}
          <input
            ref=?{
              ref
              ->Js.Nullable.toOption
              ->Belt.Option.map(ReactDOMRe.Ref.domRef)
            }
            id=name
            name
            type_
            ?min
            max=?{resolveOption(max, m => Some(string_of_int(m)), None)}
            ?step
            ?pattern
            ?disabled
            placeholder=?{
              resolveOption(
                disabled,
                d => !d ? placeholder : None,
                placeholder,
              )
            }
            ?autoComplete
            ?onBlur
            ?onFocus
            ?onKeyDown
            ?style
            ?ariaExpanded
            // ?required
            className={css(
              collapseOption([
                Some(
                  TextInputStyle.input(
                    ~validation=?
                      isValid ? None : Some(TextInputStyle.Invalid),
                    ~position=?
                      {resolveOption(
                         maskEnd,
                         _ =>
                           resolveOption(
                             maskStart,
                             _ => Some(TextInputStyle.Both),
                             Some(TextInputStyle.End_),
                           ),
                         resolveOption(
                           maskStart,
                           _ => Some(TextInputStyle.Start),
                           None,
                         ),
                       )},
                    (),
                  ),
                ),
                Some(
                  TextInputStyle.inputText(
                    ~position=?
                      {resolveOption(
                         maskStart,
                         _ => None,
                         resolveOption(
                           maskEnd,
                           _ => Some(TextInputStyle.End_),
                           None,
                         ),
                       )},
                    (),
                  ),
                ),
                extend,
              ]),
            )}
            value
            onChange={event =>
              onChange(ReactEvent.Form.target(event)##value)
            }
          />
          {switch (maskEnd) {
           | Some(mask) =>
             <div
               className={css([
                 TextInputStyle.mask(~position=TextInputStyle.End_, ()),
                 TextInputStyle.maskText(),
               ])}>
               mask->s
             </div>
           | None => n
           }}
        </Box>
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
      </Box>
      {switch (error) {
       | Some(error) => <Warning> error </Warning>
       | None => n
       }}
    </Box>;
  });