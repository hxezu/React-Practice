import { useCallback, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 메모이제이션
// 모든 컴포넌트를 다 메모이제이션 하는 게 좋은거 아님?
// 연산 비용
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos((todos) => [
        ...todos,
        {
          id: Math.random(),
          text: text.trim(),
          completed: false,
        },
      ]);
    }
  };

  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    const randomText = Array.from(
      { length: 2000 },
      (_, index) => `Todo #${index + 1}`
    );
    randomText.forEach((text) => addTodo(text));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">Todo List</h2>
        <TodoEditor addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
