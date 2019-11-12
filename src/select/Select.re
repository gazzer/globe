open Utils;

let icon = "PHN2ZyBoZWlnaHQ9IjEwMDBweCIgd2lkdGg9Ijg2NnB4IiB2aWV3Qm94PSIwIDAgODY2IDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGc+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjcwIiBzdHJva2U9IiNiZWJlYmUiIGZpbGw9IiNiZWJlYmUiIGQ9Ik02MyAyODBjMCAwIDM3MCAzNTYgMzcwIDM1NmMwIDAgMzcyIC0zNTYgMzcyIC0zNTZjMTQuNjY3IC0xNy4zMzMgMzAuNjY3IC0xNy4zMzMgNDggMGMxNy4zMzMgMTQuNjY3IDE3LjMzMyAzMC42NjcgMCA0OGMwIDAgLTM5NiAzOTIgLTM5NiAzOTJjLTE0LjY2NyAxNC42NjcgLTMwLjY2NyAxNC42NjcgLTQ4IDBjMCAwIC0zOTYgLTM5MiAtMzk2IC0zOTJjLTE3LjMzMyAtMTcuMzMzIC0xNy4zMzMgLTMzLjMzMyAwIC00OGMxNiAtMTYgMzIuNjY3IC0xNiA1MCAwYzAgMCAwIDAgMCAwIi8+CiAgPC9nPgo8L3N2Zz4=";

[@react.component]
let make =
  React.forwardRef(
    (
      ~name: string,
      ~onChange: string => unit,
      ~onFocus=?,
      ~value: string,
      ~disabled: option(bool)=?,
      ~required: option(bool)=?,
      ~isValid: bool=true,
      ~children: React.element,
      (),
      ref,
    ) => {
    let css = ReactFela.useFela();

    <select
      ref=?{ref->Js.Nullable.toOption->Belt.Option.map(ReactDOMRe.Ref.domRef)}
      ?disabled
      name
      value
      ?onFocus
      // ?required
      onChange={event => onChange(ReactEvent.Form.target(event)##value)}
      style={ReactDOMRe.Style.make(
        ~backgroundImage="url(\"data:image/svg+xml;base64," ++ icon ++ "\")",
        (),
      )}
      className={css([
        SelectStyle.input(
          ~validation=?isValid ? None : Some(SelectStyle.Invalid),
          (),
        ),
        SelectStyle.inputText(),
      ])}>
      children
    </select>;
  });