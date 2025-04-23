export function CounterReducer(
  state: { value: number },
  action: { type: string; step?: number }
) {
  const step = action.step ?? 1;

  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + step };
    case "DECREMENT":
      return { value: state.value - step };
    case "RESET":
      return { value: 0 };
    default:
      return state;
  }
  return state;
}
