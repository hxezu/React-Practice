import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  const memoization = useMemo(() => ({ increment, decrement, reset }), []);
  return (
    <CounterActionContext value={memoization}>
      <CounterContext value={{ count }}>{children}</CounterContext>
    </CounterActionContext>
  );
}
