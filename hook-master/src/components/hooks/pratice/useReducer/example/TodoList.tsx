export default function TodoList() {
  return (
    <div className="space-y-4">
      <form className="flex space-x-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4 text-blue-600" />
            <span className={"line-through text-gray-400"}>아침먹기</span>
          </div>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </li>
      </ul>

      <p className="text-center text-gray-500">No todos yet. Add some!</p>
    </div>
  );
}
