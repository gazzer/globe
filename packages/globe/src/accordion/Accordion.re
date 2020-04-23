[@react.component]
let make = (~expanded=false, ~onChange, ~trigger, ~children) => {
  let triggerEl = trigger(expanded);

  let mode = !expanded ? Some(AccordionStyle.Collapsed) : None;

  <div>
    <div
      className={AccordionStyle.trigger()} onClick={_ => onChange(!expanded)}>
      <span className={AccordionStyle.triggerText()}> triggerEl </span>
      {expanded
         ? <Icons.minus fill="rgb(160, 160, 160)" />
         : <Icons.plus fill="rgb(160, 160, 160)" />}
    </div>
    <div className={AccordionStyle.body(~mode?, ())}> children </div>
  </div>;
};