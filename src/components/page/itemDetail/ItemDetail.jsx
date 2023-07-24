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
  */
  return (
    <section className="core">
      <section className="description">
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
        {/* TODO: deshabilitar cuando no hay stock */}
        <div className="buttons" disabled={producto.stock}>
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={initial}
          />
          {/* <QuatityButton /> */}
        </div>
      </section>
    </section>
  );
};

export default ItemDetail;
