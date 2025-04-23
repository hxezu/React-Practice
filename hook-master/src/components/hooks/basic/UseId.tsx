import { useId } from "react";

// useId 훅
// useId는 React 18에서 도입된 훅으로, 고유한 ID를 생성하는 데 사용됩니다.
// 이 ID는 서버와 클라이언트에서 동일하게 생성되므로, SSR(서버 사이드 렌더링) 환경에서도 안전하게 사용할 수 있습니다.
// useId는 주로 접근성(ARIA) 속성에 사용되는 ID를 생성하는 데 유용합니다.
export default function UseId() {
  const id = useId();

  return (
    <>
      <h1>UseId Component</h1>
      return (
      <>
        <label htmlFor={id}>Enter your name:</label>
        <input id={id} type="text" />
      </>
      );
    </>
  );
}
