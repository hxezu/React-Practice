import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    selected: i === 29_999_998,
  };
});
// 값을 메모할때 -> useMemo
// React.memo ->
export default function UseMemo() {
  const [count, setCount] = useState(0);

  // 불필요한 연산을 만들어준 것
  // 3000만개의 배열 데이터를 렌더링 마다 재생성하고 있음
  const [items] = useState(initialItems);

  // const selectItems = useMemo(() => items.find((item) => item.selected), []);
  const selectItems = useMemo(() => items.find((item) => item.selected), []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
      <p>{selectItems?.id}</p>
    </>
  );
}
