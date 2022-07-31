import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/UserContext";

const ProtectedRoutes = ({ children }) => {
    const { user } = UserAuth();

if (!user) {
  return <Navigate to="/" />;
}
return children;
};

export default ProtectedRoutes;
