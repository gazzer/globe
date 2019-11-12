open Utils;

[@react.component]
let make = (~expanded=false, ~onChange, ~trigger, ~children) => {
  let css = ReactFela.useFela1();
  let triggerEl = trigger(expanded);

  let mode = !expanded ? Some(AccordionStyle.Collapsed) : None;

  <div>
    <div
      className={css(AccordionStyle.trigger())}
      onClick={_ => onChange(!expanded)}>
      <span className={css(AccordionStyle.triggerText())}> triggerEl </span>
      {expanded
         ? <Icons.downOpenBig fill="rgb(160, 160, 160)" />
         : <Icons.rightOpenBig fill="rgb(160, 160, 160)" />}
    </div>
    <div className={css(AccordionStyle.body(~mode?, ()))}> children </div>
  </div>;
};