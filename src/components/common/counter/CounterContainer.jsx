import { useContext, useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";

const CounterContainer = ({
  stock,
  onAdd,
  initial = 1,
  isInItemDetail = true,
  product = {},
  setTotalCompra = () => {},
}) => {
  const [contador, setContador] = useState(initial);
  const { getTotalPrice } = useContext(CartContext);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      if (!isInItemDetail) {
        product.quantity = product.quantity + 1;
      }
      setTotalCompra(getTotalPrice());
    } else {
      Swal.fire({
        icon: "error",
        title: "Ha seleccionado el máximo disponible",
        text: `El producto que está seleccionado sólo tiene ${stock} unidad(es) disponibles.`,
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      if (!isInItemDetail) {
        product.quantity = product.quantity - 1;
      }
      setTotalCompra(getTotalPrice());
    }
  };

  return (
    <Counter
      stock={stock}
      contador={contador}
      sumar={sumar}
      restar={restar}
      onAdd={onAdd}
      isInItemDetail={isInItemDetail}
    />
  );
};

export default CounterContainer;
