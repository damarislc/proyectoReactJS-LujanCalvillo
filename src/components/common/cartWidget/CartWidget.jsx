import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={3} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
