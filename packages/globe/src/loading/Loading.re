[@react.component]
let make = (~size=5, ~className=?, ~color="rgb(0, 176, 164)") => {
  let theme = ReactFela.useTheme();

  let pxSize = size * theme##baselineGrid;

  let r = pxSize / 2;

  let radius = string_of_int(r);
  let lowRadius = string_of_int(r / 3);
  let height = string_of_int(pxSize);
  let width = string_of_int(pxSize * 3 + r);

  let animateValues =
    radius ++ ";" ++ lowRadius ++ ";" ++ radius ++ ";" ++ radius;

  let fill =
    switch (className) {
    | Some(_) => None
    | None => Some(color)
    };

  <svg
    width
    height
    viewBox={"0 0 " ++ width ++ " " ++ height}
    xmlns="http://www.w3.org/2000/svg"
    ?fill
    ?className>
    <circle cx=radius cy=radius r=radius>
      <animate
        attributeName="r"
        from=radius
        to_=radius
        begin_="0s"
        dur="1.5s"
        values=animateValues
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to_="1"
        begin_="0s"
        dur="1.5s"
        values="1;.5;1;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={string_of_int(r * 3 + size)} cy=radius r=radius>
      <animate
        attributeName="r"
        from=radius
        to_=radius
        begin_="0.3s"
        dur="1.5s"
        values=animateValues
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to_="1"
        begin_="0.3s"
        dur="1.5s"
        values="1;.5;1;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={string_of_int(r * 5 + size * 2)} cy=radius r=radius>
      <animate
        attributeName="r"
        from=radius
        to_=radius
        begin_="0.6s"
        dur="1.5s"
        values=animateValues
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to_="1"
        begin_="0.6s"
        dur="1.5s"
        values="1;.5;1;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>;
};