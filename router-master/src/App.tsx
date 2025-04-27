import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Settgins from "./pages/Settings";
import RootLayout from "./layout/RootLayout";
import Read from "./pages/Read";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        {/* 레이아웃 라우트 */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          {/* 중첩 라우트 */}
          {/* 라우트 프리픽스 */}
          <Route path="my">
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path="settings" element={<Settgins />}></Route>
            </Route>
          </Route>
          {/* 동적 세그먼트 */}
          {/* 옵셔널 세그먼트 ? */}
          <Route path="/read/:a" element={<Read />} />
        </Route>
        {/* 스플랫 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
