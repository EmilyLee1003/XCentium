import { Navigate } from "react-router-dom";

import { useAuth } from "../Auth/Auth";

//private route to protect the home page
export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.isAuth ? children : <Navigate to="/login" />;
};
