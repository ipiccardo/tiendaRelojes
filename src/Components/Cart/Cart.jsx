import React from "react";
import { useCart } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Cart.css";

const Cart = () => {
  const { Cart, removeItem, clear, cartTotal } = useCart();

  return Cart.length > 0 ? (
    <div>
      {Cart.map((Item) => (
        <div key={Item.id}>
          <div>
            <img src={Item.pictureUrl} alt={Item.title} />
          </div>
          <div>
            <div>{Item.title}</div>
            <div
              style={{
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {Item.description}
            </div>
            <div>
              $ {Item.price} X {Item.Quantity}
            </div>
          </div>
          <div>$ {Item.price * Item.Quantity}</div>
          <div>
            <DeleteIcon onClick={() => removeItem(Item.id)} />
          </div>
        </div>
      ))}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <span>Total: $ {cartTotal()}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/Order">
          <button
            class="button"
            style={{
              marginRight: "10px",
            }}
          >
            Finalizar compra
          </button>
        </Link>
        <button class="button" onClick={() => clear()}>
          Vaciar carrito
        </button>
      </div>
    </div>
  ) : (
    <div>
      <h1
        style={{
          marginTop: "20px",
        }}
      >
        No agragaste productos al carrito
      </h1>
      <button
        class="buttonVolveraComprar"
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Link to="/">Volver a comprar</Link>
      </button>
    </div>
  );
};

export default Cart;
