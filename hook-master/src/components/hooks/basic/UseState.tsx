// 1. useState 훅
// 2. useState 훅이란, 상태를 관리하기 위한 훅이다.
// 3. useState 훅을 사용하면 컴포넌트의 상태를 선언하고, 상태를 변경하는 함수를 반환한다.

// [핵심 체크포인트 1]
// 상태 업데이트 함수를 사용할 때는 이것만 기억하세요.
// 변경되는 값이 현재 상태와 관련이 없다? -> 상태 업데이트 함수에 값을 넘겨주세요.
// 변경되는 값이 현재 상태와 관련이 있다? -> 상태 업데이트 함수에 콜백 함수를 넘겨주세요.

// [핵심 체크포인트 2]
// 불변성 유지
// 상태를 직접 변경하지 않고, 새로운 상태를 반환하는 함수를 사용하세요.
// 예를 들어, 배열의 경우 push() 메서드를 사용하지 않고, map(), filter(), concat() 메서드를 사용하세요.
// 예를 들어, 객체의 경우 , spread operator(...)를 사용하세요.
import { useState } from "react";

export default function UseState() {
  // 일반 데이터
  const [count, setCount] = useState(0);
  const changeCountHandler = () => {
    // 변경 되는 값이 현재 상태와 관련이 없는 경우
    setCount(10);
  };

  // 객체 데이터
  const [setting, setSetting] = useState({
    theme: "dark",
  });
  const changeSettingHandler = () => {
    // 변경 되는 값이 현재 상태와 관련있을 때
    setSetting((setting) => ({
      ...setting,
      theme: setting.theme === "dark" ? "light" : "dark",
    }));
  };

  // 배열 데이터
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ]);

  const addUserHandler = () => {
    setUsers((users) => [...users, { id: 4, name: "hyeju" }]);
  };
  const deleteUserHandler = () => {
    setUsers((users) => users.filter((val) => val.id !== 4));
  };
  const changeUserHandler = () => {
    setUsers((users) =>
      users.map((user) => (user.id === 1 ? { ...user, name: "Anna" } : user))
    );
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={changeCountHandler}>숫자 변경하기</button>
      <h1>Theme: {setting.theme}</h1>
      <button onClick={changeSettingHandler}>테마 변경하기</button>
      <h1>Users: {users.map((user) => user.name).join(", ")}</h1>
      <button onClick={addUserHandler}>유저 추가하기</button>
      <button onClick={deleteUserHandler}>유저 삭제하기</button>
      <button onClick={changeUserHandler}>유저 변경하기</button>
    </>
  );
}
