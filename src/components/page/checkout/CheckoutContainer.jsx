import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    //CREAR LA ORDEN EN FIREBASE
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((e) => {
        console.log("error al crear la orden, " + e);
      });

    //MODIFICAR EL STOCK EN FIREBASE DE CADA DOCUMENT
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderId ? (
        <div>
          <h3>Gracias por su compra</h3>
          <h4>Su numero de compra es: {orderId}</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su apellido"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
