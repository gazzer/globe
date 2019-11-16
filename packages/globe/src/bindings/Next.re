module Link = {
  [@bs.module "next/link"] [@react.component]
  external make:
    (
      ~href: string=?,
      ~_as: string=?,
      ~replace: bool=?,
      ~shallow: bool=?,
      ~passHref: bool=?,
      ~children: React.element
    ) =>
    React.element =
    "default";
};

module Head = {
  [@bs.module "next/head"] [@react.component]
  external make: (~children: React.element) => React.element = "default";
};

module Error = {
  [@bs.module "next/error"] [@react.component]
  external make: (~statusCode: int) => React.element = "default";
};

module Router = {
  [@bs.module "next/router"]
  external useRouter: unit => Js.t('a) = "useRouter";

  [@bs.send]
  external push: (Js.t('a), ~url: string) => Js.Promise.t(bool) = "push";
};