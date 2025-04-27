import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";
import { useEffect, useState } from "react";

export default function PublicOnlyRoute() {
  const navigate = useNavigate();
  const [show, setIsShow] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
      return;
    }
    setIsShow(true);
  }, [isLoggedIn, navigate]);

  return <>{show && <Outlet />}</>;
}
