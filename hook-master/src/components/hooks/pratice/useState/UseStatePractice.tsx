import Counter from "./example/Counter";
import ThemeSwitcher from "./example/ThemeSwitcher";
import TodoList from "./example/TodoList";

export default function UseStatePractice() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-md mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            useState Practice
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
            <Counter />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Theme Switcher</h2>
            <ThemeSwitcher />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Todo List</h2>
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}
