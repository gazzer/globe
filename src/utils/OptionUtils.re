let resolveOption = (optional, resolve, fallback) => {
  switch (optional) {
  | Some(value) => resolve(value)
  | None => fallback
  };
};

let collapseOption = params =>
  List.fold_left(
    (acc, param) =>
      switch (param) {
      | None => acc
      | Some(param) => List.append(acc, [param])
      },
    [],
    params,
  );