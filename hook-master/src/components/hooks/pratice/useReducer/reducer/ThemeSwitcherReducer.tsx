export function ThemeSwitcherReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "NEXT":
      return (state + 1) % 4;
    default:
      return 0;
  }
  return state;
}
