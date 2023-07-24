import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({
  stock,
  onAdd,
  initial = 1,
  isInItemDetail = true,
}) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("cantidad maxima");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };
  return (
    <Counter
      contador={contador}
      sumar={sumar}
      restar={restar}
      onAdd={onAdd}
      isInItemDetail={isInItemDetail}
    />
  );
};

export default CounterContainer;
