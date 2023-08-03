import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro que quiere eliminar todos los productos del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórrarlos!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        setTotalCompra(getTotalPrice());
        Swal.fire(
          "Productos eliminados!",
          "Tu carrito ahora está vacío.",
          "success"
        );
      }
    });
  };

  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  const [totalCompra, setTotalCompra] = useState(total);
  const eliminar = (id) => {
    deleteById(id);
  };

  return (
    <Cart
      cart={cart}
      deleteById={deleteById}
      limpiar={limpiar}
      total={total}
      totalCompra={totalCompra}
      setTotalCompra={setTotalCompra}
      eliminar={eliminar}
      formatter={formatter}
    />
  );
};

export default CartContainer;
