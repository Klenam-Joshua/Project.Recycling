import { createContext, useState } from "react";
export const authContext = createContext();

export default function AuthContext({ children }) {
  const [auth, setAuth] = useState({});
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}
