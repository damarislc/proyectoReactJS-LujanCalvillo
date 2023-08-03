import CounterContainer from "../../common/counter/CounterContainer";
import { Link } from "react-router-dom";
import { Button, Container, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({
  cart,
  limpiar,
  eliminar,
  setTotalCompra,
  total,
  formatter,
}) => {
  return (
    <Container maxWidth="md" className="cart-main-content">
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <div>Tu carrito esta vacio</div>
      ) : (
        <div>
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
                            <CounterContainer
                              stock={libro.stock}
                              product={libro}
                              initial={libro.quantity}
                              isInItemDetail={false}
                              setTotalCompra={setTotalCompra}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="precio">${libro.price}</span>
                          <div className="actions-toolbar">
                            <IconButton
                              className="delete-button"
                              aria-label="delete"
                              onClick={() => eliminar(libro.id)}
                              sx={{ marginTop: "24px" }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="cart-all">
            {cart.length > 0 && (
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={limpiar}
              >
                Vaciar carrito
              </Button>
            )}
            <h2 className="total">El total es: {formatter.format(total)}</h2>
            <Link to="/checkout" className="checkout">
              <Button variant="contained" size="medium">
                Finalizar compra
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
