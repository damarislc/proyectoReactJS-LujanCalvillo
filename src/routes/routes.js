import CartContainer from "../components/page/cart/CartContainer";
//import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/page/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/page/itemListContainer/ItemListContainer";

export const routes = [
  { id: "home", path: "/", Element: ItemListContainer },
  { id: "type", path: "/type/:type", Element: ItemListContainer },
  { id: "detalle", path: "/itemDetail/:id", Element: ItemDetailContainer },

  { id: "cart", path: "/cart", Element: CartContainer },
  /* { id: "checkout", path: "/checkout", Element: CheckoutContainer }, */
];
