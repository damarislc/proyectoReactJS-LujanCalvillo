import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route
          path="/"
          element={<ItemListContainer bienvenido={bienvenido} />}
        />
        <Route path="/type/:type" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/login" element={<h1>Este es el login</h1>} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} /> */}
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
