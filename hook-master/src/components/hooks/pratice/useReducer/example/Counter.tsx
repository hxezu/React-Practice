export default function Counter() {
  {
    /** */
  }
  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-blue-600">0</span>
      </div>

      <div className="flex justify-center space-x-2">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          Decrease
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
          Reset
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Increase
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-600">Step:</span>
        <select className="border rounded px-2 py-1">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
