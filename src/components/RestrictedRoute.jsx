import { getAuth } from "firebase/auth";
import { appFireBase } from "../firebase/firebase";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
const auth = getAuth(appFireBase);

// const user = auth.currentUser;

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  // console.log(isLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
