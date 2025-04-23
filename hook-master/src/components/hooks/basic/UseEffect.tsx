// UseEffect 훅
// useEffect 훅은 컴포넌트가 렌더링된 후 특정 작업(사이드 이펙트)을 수행할 수 있도록 해줍니다.(생성, 삭제, 업데이트)
// 예를 들어, API 호출, DOM 조작, 타이머 설정 등을 수행할 수 있습니다.
// useEffect 훅은 두 번째 인자로 의존성 배열을 받을 수 있습니다.
// 의존성 배열에 있는 값이 변경될 때마다 useEffect 훅이 실행됩니다.
// 의존성 배열이 비어있으면 컴포넌트가 처음 렌더링될 때만 useEffect 훅이 실행됩니다.
// useEffect 훅은 컴포넌트가 언마운트될 때 정리 작업을 수행할 수 있는 함수를 반환할 수 있습니다.
// useEffect 훅은 비동기 작업을 수행할 수 없습니다.
// useEffect 훅은 비동기 작업을 수행할 수 없으므로, 비동기 작업을 수행하려면 useEffect 훅 밖에서 async 함수를 정의하고 호출해야 합니다.
// useEffect 훅은 컴포넌트가 렌더링될 때마다 실행됩니다.

import { useEffect } from "react";

// useEffect 훅은 컴포넌트가 렌더링될 때마다 실행되므로, 렌더링 성능에 영향을 줄 수 있습니다.
// clean up 함수
export default function UseEffect() {
  useEffect(() => {}, []);
  return (
    <>
      <h1>UseEffect Component</h1>
    </>
  );
}
