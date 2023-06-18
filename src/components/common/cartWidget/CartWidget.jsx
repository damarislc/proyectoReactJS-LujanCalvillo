import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartWidget = () => {
  return (
    <h3>
      <a href="">
        <AiOutlineShoppingCart color="red" title="carrito" size={"2em"} />
        <span>0</span>
      </a>
    </h3>
  );
};

export default CartWidget;
