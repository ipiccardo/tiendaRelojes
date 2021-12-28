import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useCart } from "../../../CartContext/CartContext";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./ItemDetail.css";

export default function ItemDetail() {
  const [Item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "Item", id);
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ ...snapshot.data(), id: snapshot.id });
      }
    });
  }, [id]);

  const [quantityToAdd, setQuantityToAdd] = useState();

  const { addItem } = useCart();

  const onAdd = (Quantity) => {
    const newItem = {
      ...Item,
      Quantity: Quantity,
    };
    addItem(newItem);
    setQuantityToAdd(Quantity);
  };

  return (
    <div class="flex">
      <ul class="marginTop">
        {Item && (
          <li style={{ listStyle: "none" }} key={Item.id}>
            <h3>{Item.title}</h3>
            <h2 class="marginTop">$ {Item.price}</h2>
            <p
              style={{
                width: "50%",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "15px",
              }}
            >
              {Item.description}
            </p>
            <div>
              <img src={Item.pictureUrl} alt={Item.pictureUrl}></img>
            </div>
          </li>
        )}
      </ul>
      {
        <>
          {quantityToAdd === undefined ? (
            <ItemCount stock={Item.stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <p>
                Agregaste {quantityToAdd} {Item.title} al carrito
              </p>
              <Link to="/Cart">
                <Button
                  class="button"
                  style={{
                    marginTop: "15px",
                  }}
                >
                  Carrito
                </Button>
              </Link>
              <Link to="/">
                <Button
                  class="button"
                  style={{
                    marginTop: "15px",
                  }}
                >
                  Seguir comprando
                </Button>
              </Link>
            </>
          )}
        </>
      }
      <p
        className="stock"
        style={{
          marginTop: "15px",
          marginBottom: "5px",
        }}
      >
        {" "}
        stock: {Item.stock}{" "}
      </p>
      <Link to="/">
        <Button
          class="button"
          style={{
            marginTop: "15px",
          }}
        >
          Volver al Home
        </Button>
      </Link>
    </div>
  );
}
