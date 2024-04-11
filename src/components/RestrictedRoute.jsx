// import { getAuth } from "firebase/auth";
// import { appFireBase } from "../firebase/firebase";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
// const auth = getAuth(appFireBase);

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
