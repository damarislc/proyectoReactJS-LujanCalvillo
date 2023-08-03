import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item, isInItemList = true }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "1em" }}>
      <CardMedia
        component="img"
        height="300"
        image={item.img}
        title={item.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card-title"
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-resumen"
        >
          {item.resumen}
        </Typography>
        <Typography variant="h6" className="card-price">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        {isInItemList ? (
          <Link to={`/ItemDetail/${item.id}`}>
            <Button size="small" className="button-detail">
              Ver detalle
            </Button>
          </Link>
        ) : (
          <Button size="small">Eliminar</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
