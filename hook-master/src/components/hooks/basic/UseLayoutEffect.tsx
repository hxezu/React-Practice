{
  /* 
  useLayoutEffect 훅
  useEffect 훅과 99% 동일한데 실행 시점에 차이가 있다
  useEfffect-> 컴포넌트가 렌더링 된 후 실행
  useLayoutEffect -> 컴포넌트가 렌더링 되기 전에 실행
  */
}
import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }

  // useEffect(() => {
  //   if (count === 10) setCount(0);
  // }, [count]);

  //화면에 그려지기 전에 실행
  useLayoutEffect(() => {
    if (count === 10) setCount(0);
  }, [count]);

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
}
