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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.resumen}
        </Typography>
      </CardContent>
      <CardActions>
        {isInItemList ? (
          <Link to={`/ItemDetail/${item.id}`}>
            <Button size="small">Ver detalle</Button>
          </Link>
        ) : (
          <Button size="small">Eliminar</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
