import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PublicOnlyRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </>
    </>
  );
}
