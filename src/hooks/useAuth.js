import { useContext } from "react";
import AuthContext from "../context/authContext.js";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  const auth = authContext.isAuthenticated;
  const setAuth = (value, tokenData = null) => {
    if (value) {
      authContext.login();

      if (tokenData) {
        window.localStorage.setItem("token-data", JSON.stringify(tokenData))
      }
    } else {
      authContext.logout();
      window.localStorage.removeItem("token-data")
    }
  };

  return [auth, setAuth];
};

export default useAuth;
