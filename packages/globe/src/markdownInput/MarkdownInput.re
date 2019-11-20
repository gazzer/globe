open ResponsiveProps;
open ReactUtils;

[@react.component]
let make =
  React.forwardRef(
    (
      ~isValid: option(bool)=?,
      ~value: string,
      ~name: string,
      // WHY DO I HAVE TO TYPE THOSE?
      ~minLength: option(int)=?,
      ~maxLength: option(int)=?,
      ~disabled: option(bool)=?,
      ~required: option(bool)=?,
      ~placeholder: option(string)=?,
      ~onBlur: option(ReactEvent.Focus.t => unit)=?,
      ~onFocus: option(ReactEvent.Focus.t => unit)=?,
      ~onEnter: option(ReactEvent.Keyboard.t => unit)=?,
      ~onChange: string => unit,
      ~style: option(ReactDOMRe.style)=?,
      ~label: option(React.element)=?,
      ~error: option(React.element)=?,
      ~autoResize: option(bool)=?,
      (),
      ref,
    ) => {
    let (isPreviewActive, setPreviewActive) = React.useState(_ => false);

    <Box space={Int(1)} grow={Int(1)} shrink={Int(1)}>
      <Box
        direction={String("row")}
        justifyContent={String("space-between")}
        alignItems={String("flex-end")}>
        {switch (label) {
         | Some(label) =>
           <Label ?disabled pointer=true htmlFor=name> label </Label>
         | None => <Box />
         }}
        <Box
          display={StringArray([|"none", "flex"|])}
          alignSelf={String("flex-end")}>
          <div
            style={ReactDOMRe.Style.make(
              ~flexDirection="row",
              ~flexShrink="1",
              ~justifyContent="flex-end",
              ~paddingRight="4px",
              ~marginBottom="-4px",
              (),
            )}>
            <div onClick={_ => setPreviewActive(_ => false)}>
              <Text
                extend={Fela.style({
                  "cursor": "pointer",
                  "fontSize": "16px",
                  "color":
                    !isPreviewActive
                      ? "rgb(0, 176, 164)" : "rgb(180, 180, 180)",
                })}>
                {"Edit" |> s}
              </Text>
            </div>
            <Spacer size={Int(2)} />
            <div onClick={_ => setPreviewActive(_ => true)}>
              <Text
                extend={Fela.style({
                  "cursor": "pointer",
                  "fontSize": "16px",
                  "color":
                    isPreviewActive
                      ? "rgb(0, 176, 164)" : "rgb(180, 180, 180)",
                })}>
                {"Preview" |> s}
              </Text>
            </div>
          </div>
        </Box>
      </Box>
      <Box grow={Int(1)} shrink={Int(1)}>
        {isPreviewActive
           ? <div
               style={ReactDOMRe.Style.make(
                 ~backgroundColor="white",
                 ~borderRadius="7px",
                 ~border="1px solid rgb(220, 220, 220)",
                 ~padding="11px 15px 10px 16px",
                 (),
               )}>
               <Markdown value />
             </div>
           : <TextArea
               name
               ref=?{
                 ref
                 ->Js.Nullable.toOption
                 ->Belt.Option.map(ReactDOMRe.Ref.domRef)
               }
               value
               ?style
               ?required
               ?minLength
               ?maxLength
               ?isValid
               ?onFocus
               ?onChange
               ?placeholder
             />}
      </Box>
      {switch (error) {
       | Some(error) => <Warning> error </Warning>
       | None => n
       }}
    </Box>;
  });