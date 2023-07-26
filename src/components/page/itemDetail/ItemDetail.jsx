import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd, initial }) => {
  /*
  <Grid container spacing={0} direction="column" alignItems="center">
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={producto.img}
            alt="portada libro"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onAdd}>
              Agregar al carrito
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>

    ------------

    <div className="description">
        <h1>{producto.title}</h1>
        <img
          src={producto.img}
          alt={producto.title}
          className="product-image"
        />
        <p className="desc">{producto.description}</p>
        <div className="price">
          <div className="main-tag">
            <p>${producto.price}</p>
          </div>
        </div>
        { TODO: deshabilitar cuando no hay stock }
        <div className="buttons" disabled={producto.stock}>
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={initial}
          />
          { <QuatityButton /> }


          <label className="label">
                <span>Cantidad</span>
              </label>
              <div className="buttons-container">
                <button className="qty-changer qty-dec">-</button>
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  min="0"
                  value="1"
                  title="Cantidad"
                  className="input-text qty"
                />
                <button className="qty-changer qty-inc">+</button>
              </div>


        </div>
      </div>
  */
  return (
    <section className="core">
      <div className="main">
        <div>breadcrumb</div>
        <div className="product-detail">
          <div className="product media">
            <img
              src={producto.img}
              alt={producto.title}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h1 className="page-title">{producto.title}</h1>
            <p>
              <b>Autor: </b>
              {producto.author}
            </p>
            <p>
              <b>Categoría: </b>
              {producto.category}
            </p>
          </div>
          <div className="product-essential">
            <div className="price-box">
              <span className="price-container">
                <span className="price-label">Precio</span>
                <span className="product-price">${producto.price}</span>
              </span>
            </div>
            <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              initial={initial}
            />
          </div>
        </div>
        <div className="product-desc">{producto.description}</div>
      </div>
    </section>
  );
};

export default ItemDetail;
