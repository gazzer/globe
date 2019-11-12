open Utils;

[@react.component]
let make =
  React.forwardRef(
    (
      ~name: string,
      ~disabled: option(bool)=?,
      ~required: bool=?,
      ~checked: bool=false,
      ~onChange: bool => unit,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela1();

    <input
      ref=?{ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)}
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
      id=name
      name
      ?disabled
      // ?required
      className={css(
        ToggleStyle.toggle(
          ~status=checked ? ToggleStyle.On : ToggleStyle.Off,
          (),
        ),
      )}
    />;
  });