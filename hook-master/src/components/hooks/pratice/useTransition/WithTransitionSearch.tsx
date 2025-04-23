import { useState, ChangeEvent, useTransition } from "react";
import { Clock, Search } from "lucide-react";

const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};

const items = generateItems(50000);

export default function WithTransitionSearch() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center p-4">
      <div className="w-[450px] bg-white rounded-xl shadow-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            With useTransition
          </h2>
          <div className="flex items-center gap-2">
            {isPending && (
              <Clock className="w-5 h-5 text-blue-500 animate-spin" />
            )}
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="항목 검색..."
          className="w-full px-4 py-2 border rounded-lg bg-white border-gray-700"
        />

        <div className="h-[400px] overflow-auto rounded-lg border border-gray-700">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-3 border-b border-gray-700 hover:bg-gray-50"
            >
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
