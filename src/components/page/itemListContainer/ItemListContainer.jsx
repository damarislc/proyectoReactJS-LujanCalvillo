import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ bienvenido }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("Error al cargar el producto");
  const { type } = useParams();

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(
        type === undefined
          ? products
          : products.filter((element) => element.type === type)
      );
      //reject("Salio todo mal");
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [type]);

  return (
    <>
      <ItemList bienvenido={bienvenido} items={items} />
      {/* <FetchingData /> */}
    </>
  );
};

export default ItemListContainer;
