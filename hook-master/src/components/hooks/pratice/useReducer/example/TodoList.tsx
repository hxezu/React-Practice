import { useReducer, useState } from "react";
import { TodoListReducer } from "../reducer/TodoListReducer";
import { twMerge } from "tailwind-merge";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(TodoListReducer, []);

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div className="space-y-4">
      <form className="flex space-x-2" onSubmit={addHandler}>
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos &&
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600"
                  checked={todo.done}
                  onChange={() =>
                    dispatch({ type: "TOGGLE", payload: todo.id })
                  }
                />
                <span
                  className={twMerge(todo.done && "line-through text-gray-400")}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500">No todos yet. Add some!</p>
      )}
    </div>
  );
}
