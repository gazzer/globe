open Utils;

[@react.component]
let make =
  React.forwardRef(
    (
      ~onChange,
      ~value,
      ~name: string,
      ~checked: bool=false,
      ~required: bool=?,
      ~disabled: option(bool)=?,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela1();

    <input
      ref=?{ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)}
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
    />;
  });