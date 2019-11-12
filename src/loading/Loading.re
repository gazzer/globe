[@react.component]
let make = (~size=20, ~className=?, ~color="rgb(0, 176, 164)") => {
  let r = size / 2;

  let radius = string_of_int(r);
  let lowRadius = string_of_int(r / 3);
  let height = string_of_int(size);
  let width = string_of_int(size * 3 + 10);

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
    <circle cx={string_of_int(r * 3 + 5)} cy=radius r=radius>
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
    <circle cx={string_of_int(r * 5 + 5 * 2)} cy=radius r=radius>
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