import { createContext } from "react";
//Context API
// 1. Context 객체 -> createContext()
// 2. Provider - 전역 상태를 공유할 컴포넌트

interface CounterContext {
  count: number;
}
interface CounterActionContext {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const CounterContext = createContext<CounterContext | null>(null);
export const CounterActionContext = createContext<CounterActionContext | null>(
  null
);
