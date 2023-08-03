import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";
import Dashboard from "../components/page/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
        <Route element={<ProtectedRoutes />}>
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Route>
      </Route>
      <Route element={<AdminRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
