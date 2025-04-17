import { useEffect } from "react";
import { useAuth } from "./src/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth?.email) {
      navigate("/home");
    }
  }, [auth]);
  return <div>{children}</div>;
}
