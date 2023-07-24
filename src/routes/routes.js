import CartContainer from "../components/page/cart/CartContainer";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/page/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/page/itemListContainer/ItemListContainer";
import FormularioFormik from "../components/page/formularioFormik/FormularioFormik";
import Dashboard from "../components/page/dashboard/Dashboard";

export const routes = [
  { id: "home", path: "/", Element: ItemListContainer },
  { id: "type", path: "/type/:type", Element: ItemListContainer },
  { id: "detalle", path: "/itemDetail/:id", Element: ItemDetailContainer },

  /* { id: "login", path: "/login", Element: ItemDetailContainer }, */
  { id: "cart", path: "/cart", Element: CartContainer },
  { id: "checkout", path: "/checkout", Element: CheckoutContainer },
  { id: "dashboard", path: "/dashboard", Element: Dashboard },
  { id: "formik", path: "/formik", Element: FormularioFormik },
];
