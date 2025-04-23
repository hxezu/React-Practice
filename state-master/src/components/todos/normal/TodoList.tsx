import TodoListItem from "./TodoListItem";

export default function TodoList() {
  return (
    <>
      <ul className="space-y-2">
        <TodoListItem />
      </ul>
      <p className="text-center text-gray-500">No todos yet. Add some!</p>
    </>
  );
}
