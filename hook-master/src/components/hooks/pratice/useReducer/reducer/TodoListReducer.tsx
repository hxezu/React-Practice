interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export function TodoListReducer(
  state: Todo[],
  action:
    | { type: "ADD"; payload: string }
    | { type: "TOGGLE"; payload: number }
    | { type: "DELETE"; payload: number }
): Todo[] {
  switch (action.type) {
    case "ADD": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      return [...state, newTodo];
    }
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
  return state;
}
