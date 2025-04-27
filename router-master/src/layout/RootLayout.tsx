import { Link, NavLink, Outlet, useNavigate } from "react-router";

export default function RootLayout() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <header>header</header>
      <nav>
        <ul>
          <li>
            <Link to="/">/</Link>
          </li>
          <li>
            <Link to="/about">/about</Link>
          </li>
          <li>
            <NavLink
              to="/read/1"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              {({ isActive }) => (
                <span>/read/1 ({isActive ? "선택됨" : "선택안됨"})</span>
              )}
            </NavLink>
          </li>
          <li>
            <button onClick={goHome}>이동하기</button>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
