import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <a href="">
      <Badge badgeContent={3} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </a>
  );
};

export default CartWidget;
