import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  let userRole = "user";
  return <div>{userRole !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</div>;
};

export default AdminRoutes;
