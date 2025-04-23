/* eslint-disable @typescript-eslint/no-unused-vars */
// useCallback 훅
// useCallback 훅은 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 방지합니다.
// useCallback은 메모이제이션된 함수를 반환합니다.
import React, { useCallback, useState } from "react";

const ChildA = React.memo(function ChildA({
  increment,
}: {
  increment: () => void;
}) {
  console.log("ChildA");
  return (
    <>
      <h1>ChildA</h1>
      <ChildB />
    </>
  );
});

function ChildB() {
  console.log("ChildB");
  return (
    <>
      <h1>ChildB</h1>
      <ChildC />
    </>
  );
}

function ChildC() {
  console.log("ChildC");
  return (
    <>
      <h1>ChildC</h1>
    </>
  );
}

export default function UseCallback() {
  console.log("UseCallback");
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <h1>UseCallback</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <ChildA increment={increment} />
    </>
  );
}
