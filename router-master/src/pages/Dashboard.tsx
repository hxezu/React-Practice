import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard Component</h1>
      <Outlet />
    </>
  );
}
