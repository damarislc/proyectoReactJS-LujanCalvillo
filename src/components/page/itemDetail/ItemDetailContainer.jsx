import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CounterContainer from "../../common/counter/CounterContainer";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});

  const { id } = useParams();
  const totalQuantity = getQuantityById(id);
  console.log(totalQuantity);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <ItemDetail producto={producto} onAdd={onAdd} initial={totalQuantity} />
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;
