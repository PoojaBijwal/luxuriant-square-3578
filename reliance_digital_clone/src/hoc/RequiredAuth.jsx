import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const RequiredAuth = ({ children }) => {
  const token = useSelector(store => store.auth.token);

  if(token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default RequiredAuth;
