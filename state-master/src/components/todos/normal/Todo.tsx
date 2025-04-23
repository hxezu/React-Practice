import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">Todo List</h2>
        <TodoEditor />
        <TodoList />
      </div>
    </div>
  );
}
