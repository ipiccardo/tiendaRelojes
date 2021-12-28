import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useCart } from "../../../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { countItems } = useCart();

  return (
    <Link to="/Cart" style={{ textDecoration: "none", color: "white" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
      >
        <Badge badgeContent={countItems()} color="primary"></Badge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
