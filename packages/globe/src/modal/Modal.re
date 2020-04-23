let isClickOnInner: (option(Dom.element), ReactEvent.Mouse.t) => bool = [%bs.raw
  {| function (container, e) { return container ? container.contains(e.target) : false } |}
];

[@react.component]
let make = (~children, ~style=?, ~extend=?, ~onClose=?) => {
  let innerRef = React.useRef(Js.Nullable.null);

  <div
    className={ModalStyle.modal()}
    onClick={e => {
      let dom = React.Ref.current(innerRef);

      let isInner = isClickOnInner(Js.Nullable.toOption(dom), e);
      if (!isInner) {
        switch (onClose) {
        | Some(callback) => callback()
        | None => ()
        };
      };
    }}>
    <div
      className={ModalStyle.modalInner()}
      ref={ReactDOMRe.Ref.domRef(innerRef)}>
      <Card ?style ?extend> children </Card>
    </div>
  </div>;
};