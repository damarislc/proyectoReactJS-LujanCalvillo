import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { cart } = useContext(CartContext);
  return <>{cart.length > 0 ? <Outlet /> : <Navigate to={"/"} />};</>;
};

export default ProtectedRoutes;
