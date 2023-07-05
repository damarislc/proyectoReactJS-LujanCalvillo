import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();
  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  /* const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
  }; */
  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
