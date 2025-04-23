// useReducer 훅
// useReducer 훅은 상태 관리를 위한 React Hook입니다.
// useState 훅과 비슷하지만, 상태 변경 로직을 컴포넌트 외부로 분리할 수 있습니다.

// [핵심 포인트 1]
// useReducer 훅은 상태를 업데이트하기 위한 dispatch 함수를 반환합니다.
// dispatch 함수는 액션 객체를 인자로 받아 리듀서 함수를 호출합니다.
// 리듀서 함수는 현재 상태와 액션을 인자로 받아 새로운 상태를 반환합니다.

// [핵심 포인트 2]
// useReducer 훅은 리듀서 함수가 필요합니다.
// 리듀서 함수는 현재 상태(state)와 액션(action)을 인자로 받아 새로운 상태를 반환하는 함수입니다.
// 액션은 상태를 변경하기 위한 정보를 담고 있는 객체입니다.
// 액션은 일반적으로 type과 payload를 포함합니다.
// type은 어떤 종류의 액션인지 나타내고, payload는 상태를 변경하기 위한 데이터를 담고 있습니다.

export default function UseReducer() {
  return (
    <>
      <h1>Count: 0</h1>
    </>
  );
}
