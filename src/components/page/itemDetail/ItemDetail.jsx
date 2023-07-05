import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ItemDetail = ({ producto }) => {
  return (
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
            <Button size="small">Agregar al carrito</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ItemDetail;
