import { useContext } from "react";

import { authContext } from "../Context/AuthContext";

export const useAuth = () => {
  const auth = useContext(authContext);

  return auth;
};
