// useDeferredValue 훅
// useMemo 와 유사 (UseTransition : useCallback 과 비슷)
// React 18에서 도입된 useDeferredValue 훅은 상태 업데이트를 지연시켜 UI의 반응성을 높이는 데 사용됩니다.
// 값의 변경 사항에 대한 우선순위를 낮춰주기 위해 사용하는 훅
// 우선 순위를 낮춤으로써 연산 비용이 높은 작업을 백그라운드에서 처리할 수 있게 해주기 때문에 상대적으로 부드러운 UI 를 구현할 수 있다.
// 단, 절대적으로 부드럽게 해주는 것은 아니며, 상대적인 부드러움을 제공합니다.

import { useDeferredValue, useState } from "react";
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};
const items = generateItems(50000);

export default function UseDeferredValue() {
  const [input, setInput] = useState("");

  const deferredValue = useDeferredValue(input);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(deferredValue.toLowerCase())
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>UseDeferredValue</h1>
      <input type="text" value={input} onChange={onChange} />
      <ul>
        {filteredItems.map((d) => (
          <li key={d.id}>
            {d.name} - {d.description}
          </li>
        ))}
      </ul>
    </>
  );
}
