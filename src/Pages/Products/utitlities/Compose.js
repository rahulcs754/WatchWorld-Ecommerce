const composeFunc =
  (state, ...functions) =>
  (data) =>
    functions.reduce((acc, curr) => curr(state, acc), data);
export { composeFunc };
