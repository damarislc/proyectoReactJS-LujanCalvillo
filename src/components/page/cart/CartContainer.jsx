import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import CounterContainer from "../../common/counter/CounterContainer";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const limpiar = () => {
    //clearCart()
    Swal.fire({
      title: "¿Seguro que quiere eliminar todos los productos del carrito?",
      //text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórrarlos!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          "Productos eliminados!",
          "Tu carrito ahora está vacío.",
          "success"
        );
      }
    });
  };
  console.log(cart);
  /* <div key={elemento.id} style={{ border: "2px solid black" }}>
              <h4>{elemento.title}</h4>
              <h5>{elemento.price}</h5>
              <h5>{elemento.quantity}</h5>
              <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
            </div> */
  return (
    <div className="cart-main-content">
      <h1>Carrito</h1>
      <div className="cart table-wrapper">
        <table className="cart items data table">
          {cart.map((libro) => {
            return (
              <tbody key={libro.id} className="cart item">
                <tr>
                  <td className="col item item-all-info">
                    {}
                    <Link
                      to={"/ItemDetail/" + libro.id}
                      className="libro-img-link"
                    >
                      <span className="libro-img-container">
                        <img src={libro.img} alt="" className="libro-img" />
                      </span>
                    </Link>
                    <div className="product-item-details">
                      <strong className="libro-name">
                        <Link to={"/ItemDetail/" + libro.id}>
                          {libro.title}
                        </Link>
                      </strong>
                      <div className="field qty">
                        <CounterContainer isInItemDetail={false} />
                      </div>
                    </div>
                    <div>
                      <div className="actions-toolbar">
                        <button onClick={() => deleteById(libro.id)}>
                          Eliminar
                        </button>
                      </div>
                      <span className="precio">${libro.price}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}
      <h2>El total es: {total}</h2>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default CartContainer;
