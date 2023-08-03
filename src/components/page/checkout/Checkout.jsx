import { Button, Container, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = ({
  handleSubmit,
  handleChange,
  errors,
  cart,
  getTotalPrice,
  formatter,
}) => {
  return (
    <Container maxWidth="md" className="checkout-main-content">
      <h1>Checkout</h1>
      <div className="container-left">
        <div className="container-form">
          <p className="form-title">Información de envío</p>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="shipping-new-addres-form">
              <TextField
                label="Nombre"
                variant="outlined"
                name="name"
                error={errors.name ? true : false}
                helperText={errors.name}
                onChange={handleChange}
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Apellido"
                variant="outlined"
                name="lastname"
                error={errors.lastname ? true : false}
                helperText={errors.lastname}
                onChange={handleChange}
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Teléfono"
                variant="outlined"
                name="phone"
                error={errors.phone ? true : false}
                helperText={errors.phone}
                onChange={handleChange}
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                error={errors.email ? true : false}
                helperText={errors.email}
                onChange={handleChange}
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                className="field-street"
                label="Calle"
                variant="outlined"
                name="street"
                value="Santa Clara"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Número"
                variant="outlined"
                name="number"
                value="1234"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="C.P."
                variant="outlined"
                name="cp"
                value="45056"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Colonia"
                variant="outlined"
                name="neighborhood"
                value="Jardines del Country"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Ciudad"
                variant="outlined"
                name="city"
                value="Guadalajara"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="Estado"
                variant="outlined"
                name="state"
                value="Jalisco"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                label="País"
                variant="outlined"
                name="country"
                value="México"
                disabled
                sx={{ marginBottom: "1em" }}
              />
              <TextField
                className="field-references"
                label="Referencias"
                variant="outlined"
                name="references"
                value="Entre Capital Norte y Juan Palomar"
                disabled
                sx={{ marginBottom: "1em" }}
              />
            </div>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              sx={{ width: "100%" }}
            >
              Comprar
            </Button>
          </form>
        </div>
      </div>
      <aside className="order-resume">
        <div className="block-summary">
          <div className="resume">
            <h4 className="title">Resumen del pedido</h4>
            <div className="totals">
              <span>{cart.length}</span>
              <span> productos en el carrito</span>
            </div>
            <div className="block items-in-cart">
              <div className="content minicart-items">
                <div className="minicart-items-wrapper overflowed">
                  <ol className="minicart-items">
                    {cart.map((libro) => {
                      return (
                        <li key={libro.id} className="product-item">
                          <div className="product">
                            <div className="image-wrapper">
                              <span className="product-image-container">
                                <img
                                  src={libro.img}
                                  alt={libro.title}
                                  width="75"
                                  height="114"
                                />
                              </span>
                            </div>
                            <div className="product-item-details">
                              <div className="product-item-inner">
                                <div className="product-item-name-block">
                                  <strong className="product-item-name">
                                    {libro.title}
                                  </strong>
                                  <div className="details-qty">
                                    <span>Cantidad: </span>
                                    <span>{libro.quantity}</span>
                                  </div>
                                </div>
                                <div className="subtotal">
                                  <span className="price">
                                    ${libro.quantity * libro.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="table-wrapper">
            <table className="data table table-totals">
              <thead>
                <tr>
                  <td>
                    <h4>Resumen de pago</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="totals sub">
                  <th className="mark">Subtotal del carrito</th>
                  <td className="amount">
                    {formatter.format(getTotalPrice())}
                  </td>
                </tr>
                <tr className="totals shipping">
                  <th className="mark">Envío gratis</th>
                  <td className="amount">$0</td>
                </tr>
                <tr className="grand totals">
                  <th className="mark">
                    <strong>Total</strong>
                  </th>
                  <td className="amount">
                    <strong>
                      <span className="price">
                        {formatter.format(getTotalPrice())}
                      </span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default Checkout;
