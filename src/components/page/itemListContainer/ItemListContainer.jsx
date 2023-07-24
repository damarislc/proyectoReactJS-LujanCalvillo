import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Skeleton } from "@mui/material";
const stylesLoader = {
  display: "block",
  margin: "200px auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("Error al cargar el producto");
  const { type } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    //let itemsFiltered = query(itemsCollection, where("type", "==", type));
    let consulta; //= type ? itemsFiltered : itemsCollection;
    if (type) {
      consulta = query(productsCollection, where("type", "==", type));
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(productos);
    });
  }, [type]);

  /* if (items.length === 0) {
    return <h1>Cargando...</h1>;
  } */
  /* <PacmanLoader color="grey" size={50} cssOverride={stylesLoader} /> */
  return (
    <>
      <ItemList items={items} />
      {/* {items.length === 0 ? (
        <div>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </div>
      ) : (
        <ItemList items={items} />
      )} */}
      {/* <FetchingData /> */}
    </>
  );
};

export default ItemListContainer;
