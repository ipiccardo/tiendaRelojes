import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    const qty = count + 1;
    if (qty <= stock) {
      setCount(qty);
    }
  };

  const restar = () => {
    const qty = count - 1;
    if (qty >= initial) {
      setCount(qty);
    }
  };

  const agregarCantidades = () => {
    onAdd(count);
  };

  return (
    <div>
      <CardActions style={{ justifyContent: "center" }}>
        <Button class="buttonSumyRest" onClick={restar}>
          -
        </Button>
        <div style={{ marginLeft: "7px" }}>
          <Typography>{count}</Typography>
        </div>
        <Button class="buttonSumyRest" onClick={sumar}>
          +
        </Button>
      </CardActions>
      <CardActions style={{ justifyContent: "center" }}>
        <Button class="button" onClick={agregarCantidades}>
          Agregar al carrito
        </Button>
      </CardActions>
    </div>
  );
}
