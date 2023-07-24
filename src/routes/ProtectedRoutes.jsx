import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let userRole = "admin";
  return <div>{userRole !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</div>;
};

export default ProtectedRoutes;
