import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta;
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

  return <ItemList items={items} />;
};

export default ItemListContainer;
