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
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkout from "./Checkout";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      street: "Santa Clara",
      number: "1234",
      cp: "45056",
      neighborhood: "Jardines del Country",
      city: "Guadalajara",
      state: "Jalisco",
      country: "Mexico",
      references: "Entre Capital Norte y Juan Palomar",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };

      //CREAR LA ORDEN EN FIREBASE
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order)
        .then((res) => {
          setOrderId(res.id);
          Swal.fire({
            icon: "success",
            title: "Gracias por su compra",
            text: `Su número de compra es: ${res.id}`,
          });
          clearCart();
          navigate("/");
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            title: "Error al crear la orden",
            text: `Algo salió mal al intentar crear su orden: ${e}`,
          });
        });

      //MODIFICAR EL STOCK EN FIREBASE DE CADA DOCUMENT
      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio"),
      lastname: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Debe ser un email válido")
        .required("Este campo es obligatorio"),
      phone: Yup.number("Solo escribe el número, sin caracteres")
        .test(
          "len",
          "El telefono debe ser 10 números",
          (val) => val.toString().length === 10
        )
        .required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
    validateOnBlur: true,
  });

  let total = getTotalPrice();
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return (
    <Checkout
      orderId={orderId}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      cart={cart}
      getTotalPrice={getTotalPrice}
      formatter={formatter}
    />
  );
};

export default CheckoutContainer;
