export default function TodoListItem() {
  return (
    <>
      <li className="flex items-center justify-between p-3 bg-gray-50 rounded">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 text-blue-600" />
          <span className={"line-through text-gray-400"}>아침먹기</span>
        </div>
        <button className="text-red-500 hover:text-red-600">Delete</button>
      </li>
    </>
  );
}
