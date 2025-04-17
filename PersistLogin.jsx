import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./src/hooks/useAuth";

export default function PersistLogin({ children }) {
  const [loading, setLoading] = useState(true);
  const { setAuth } = useAuth();
  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const user = jwtDecode(token);
      //   alert(user);
      console.log({ user });
      setAuth({ ...user, token });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return <div>{loading ? <p>Loading app...</p> : children}</div>;
}
