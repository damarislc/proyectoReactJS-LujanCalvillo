import { Button, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";

const Counter = ({
  stock,
  contador,
  sumar,
  restar,
  onAdd,
  isInItemDetail = true,
}) => {
  return (
    <>
      <div className="control">
        <label className="label">
          <span>Cantidad</span>
        </label>
        <ButtonGroup className="counter-group">
          <Button aria-label="reduce" onClick={restar} className="reduce">
            <RemoveIcon fontSize="small" />
          </Button>
          <span className="label counter">{contador}</span>
          <Button aria-label="increase" onClick={sumar}>
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <Typography
        variant="subtitle1"
        className="availability"
        color={stock === 0 && "red"}
      >
        Unidades disponibles: {stock}
      </Typography>
      {isInItemDetail && (
        <div className="actions">
          <Button
            variant="contained"
            className="add-to-cart"
            onClick={() => onAdd(contador)}
            disabled={stock === 0}
            color="info"
          >
            Agregar al carrito
          </Button>
        </div>
      )}
    </>
  );
};

export default Counter;
