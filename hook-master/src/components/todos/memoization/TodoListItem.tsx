import React from "react";
export default React.memo(function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  console.log("todolistItem");
  return (
    <>
      <li
        key={todo.id}
        className="flex items-center justify-between p-3 bg-gray-50 rounded"
      >
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-4 w-4 text-blue-600"
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </li>
    </>
  );
});
