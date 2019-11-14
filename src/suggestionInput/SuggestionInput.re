open ReactUtils;
open OptionUtils;
open Hooks;

let current = ref("");
type suggestion;

[@react.component]
let make =
    (
      ~name,
      ~value,
      ~onChange,
      ~onSelect,
      ~debounce=300,
      ~style=?,
      ~required=?,
      ~disabled=?,
      ~isValid=?,
      ~placeholder=?,
      ~children,
      ~maskStart=?,
      ~maskEnd=?,
      ~label=?,
      ~error=?,
      ~getSuggestions: string => Js.Promise.t(array(suggestion)),
      ~getValue: suggestion => string,
    ) => {
  let css = ReactFela.useFela1();
  let (focused, setFocused) = React.useState(_ => false);
  let (selected, setSelected) = React.useState(_ => None);
  let (clicked, setClicked) = React.useState(_ => None);
  let (loading, setLoading) = React.useState(_ => false);
  let (suggestions, setSuggestions) = React.useState(_ => [||]);
  let inputRef = React.useRef(Js.Nullable.null);

  React.useEffect1(
    () => {
      setLoading(_ => true);
      None;
    },
    [|value|],
  );

  let debouncedValue = useDebounce(value, debounce);

  current := debouncedValue;

  React.useEffect1(
    () => {
      getSuggestions(debouncedValue)
      |> Js.Promise.then_(suggestions => {
           if (current^ === debouncedValue) {
             setSuggestions(_ => suggestions);
             setLoading(_ => false);
           };

           Js.Promise.resolve(true);
         })
      |> Js.Promise.catch(err => {
           if (current^ === debouncedValue) {
             setSuggestions(_ => [||]);
             setLoading(_ => false);
           };
           Js.Promise.resolve(true);
         })
      |> ignore;

      setSelected(_ => None);
      switch (clicked) {
      | Some(suggestion) =>
        if (debouncedValue !== suggestion) {
          setClicked(_ => None);
        }
      | None => ()
      };

      None;
    },
    [|debouncedValue|],
  );

  let suggestionCount = Js.Array.length(suggestions);
  let showSuggestions = clicked === None && focused && suggestionCount > 0;

  <Box grow=1 shrink=1 space=1>
    {switch (label) {
     | Some(label) =>
       <Label ?disabled pointer=true htmlFor=name> label </Label>
     | None => n
     }}
    <Box grow=1 shrink=1>
      <TextInput
        ?required
        ?disabled
        ?isValid
        name
        value
        ?maskStart
        ?maskEnd
        ?placeholder
        autoComplete="off"
        onChange={v => onChange(v)}
        onFocus={_ => setFocused(_ => true)}
        onBlur={e => setFocused(_ => false)}
        onKeyDown={e =>
          if (showSuggestions && !loading) {
            let key = ReactEvent.Keyboard.keyCode(e);
            let which = ReactEvent.Keyboard.which(e);
            let keyCode = key !== 0 ? key : which;

            if (keyCode === 27) {
              ReactEvent.Keyboard.preventDefault(e);
              onChange("");
            };

            if (keyCode === 13) {
              switch (selected) {
              | None => ()
              | Some(sel) =>
                let suggestion = suggestions[sel];
                onChange(getValue(suggestion));
                onSelect(suggestion);
                setClicked(_ => Some(getValue(suggestion)));
              };

              ReactEvent.Keyboard.preventDefault(e);
            };

            if (keyCode === 40) {
              setSelected(selected =>
                switch (selected) {
                | None => Some(0)
                | Some(sel) =>
                  Some(Js.Math.min_int(sel + 1, suggestionCount - 1))
                }
              );
            };

            if (keyCode === 38) {
              setSelected(selected =>
                switch (selected) {
                | None => Some(0)
                | Some(sel) => Some(Js.Math.max_int(0, sel - 1))
                }
              );
            };
          }
        }
        style={ReactDOMRe.Style.make(
          ~borderRadius=?
            {showSuggestions
               ? resolveOption(
                   maskStart,
                   _ =>
                     resolveOption(
                       maskEnd,
                       _ => Some("0 0 0 0"),
                       Some("0 7px 0 0"),
                     ),
                   resolveOption(
                     maskEnd,
                     _ => Some("7px 0 0 0"),
                     Some("7px 7px 0 0"),
                   ),
                 )
               : None},
          (),
        )}
      />
      {showSuggestions
         ? <div className={css(SuggestionInputStyle.suggestionContainer())}>
             {loading
                ? <div className={css(SuggestionInputStyle.suggestion())}>
                    <Loading size=18 />
                  </div>
                : Js.Array.mapi(
                    (suggestion, index) =>
                      children(
                        suggestion,
                        resolveOption(selected, i => index === i, false),
                        () => {
                          onChange(getValue(suggestion));
                          onSelect(suggestion);
                          setClicked(_ => Some(getValue(suggestion)));
                        },
                      ),
                    suggestions,
                  )
                  |> a}
           </div>
         : n}
    </Box>
    {switch (error) {
     | Some(error) => <Warning> error </Warning>
     | None => n
     }}
  </Box>;
};