// 컴포넌트는 언제 리렌더링되나요?
// 1. 부모 컴포넌트가 리렌더링될 때
// 2. props가 변경될 때
// 3. state(상태)가 변경될 때

// React.memo : 고차 컴포넌트
// 컴포넌트를 반환하는 컴포넌트
import React, { useState } from "react";

const ChildA = React.memo(function ChildA() {
  console.log("ChildA");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
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

function ChildD() {
  console.log("ChildD");
  return (
    <>
      <h1>ChildD</h1>
    </>
  );
}

export default function ReactMemo() {
  console.log("ReactMemo");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ReactMemo</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <ChildA />
      <ChildD />
    </>
  );
}
