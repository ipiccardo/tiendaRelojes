import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
import "./Order.css";

const inputs = [
  {
    label: "Nombre completo",
    name: "nombre",
  },
  {
    label: "Celular",
    name: "celular",
  },
  {
    label: "Mail",
    name: "mail",
  },
];

const Order = () => {
  const { Cart, cartTotal, clear } = useCart();

  const [buyer, setBuyer] = useState({
    nombre: "",
    celular: "",
    mail: "",
  });

  const onChange = (event) => {
    setBuyer({ ...buyer, [event.target.name]: event.target.value });
  };
  const ordenConfirmada = () => {
    const order = {
      buyer,
      items: Cart,
      total: cartTotal(),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    const batch = writeBatch(db);

    Cart.forEach((Item) => {
      const itemRef = doc(db, "Item", Item.id);
      batch.update(itemRef, { stock: Item.stock - Item.Quantity });
    });

    batch.commit();

    addDoc(ordersCollection, order).then(({ id }) => {
      alert(
        `¡ORDEN CONFIRMADA!,
          N°orden: ${id}. Se enviaron los detalles de la compra a tu mail: ${buyer.mail}
          success`
      );
      clear();
    });
  };

  return (
    <>
      {Cart.length === 0 ? (
        <div>
          <h1>¿Querés seguir comprando?</h1>
          <Button
            class="buttonVolveraComprar"
            style={{
              marginTop: "20px",
            }}
          >
            <Link to="/">Volver al catálogo</Link>
          </Button>
        </div>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            <Typography variant="h5" color="#262626">
              ¿Querés modificar tu compra?
            </Typography>
            <Button
              class="buttonVolveraComprar"
              style={{
                marginRight: "15px",
                marginTop: "15px",
              }}
            >
              <Link to="/">VOLVER AL HOME</Link>
            </Button>
            <Button class="buttonVolveraComprar">
              <Link to="/cart">VOLVER AL CARRITO</Link>
            </Button>
          </div>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "100vh", borderTop: "1px solid #262626" }}
            spacing={5}
          >
            <Grid item>
              <Typography variant="h5" color="#262626">
                Completa tus datos para terminar la compra
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                style={{ minWidth: "300px", maxWidth: "500px" }}
                direction="row"
                alignItems="center"
                justify="center"
              >
                {inputs.map(({ name, label }) => (
                  <TextField
                    key={name}
                    value={buyer[name]}
                    variant="outlined"
                    name={name}
                    onChange={onChange}
                    label={label}
                    fullWidth
                    style={{ marginBottom: "1em" }}
                  />
                ))}
              </Grid>
            </Grid>
            <Button
              class="buttonVolveraComprar"
              onClick={() => ordenConfirmada()}
              style={{
                color: "white",
                backgroundColor: "rgb(14, 20, 57)",
                borderRadius: "10px",
              }}
              size="large"
              variant="contained"
              color="primary"
              disabled={!(buyer.nombre && buyer.celular && buyer.mail)}
            >
              FINALIZAR COMPRA
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default Order;
