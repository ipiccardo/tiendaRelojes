import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [Item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const switchRef = doc(db, "Item", id);
    getDoc(switchRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ ...snapshot.data(), id: snapshot.id });
      }
    });
  }, [id]);

  return <ItemDetail Item={Item} key={Item.id} />;
};

export default ItemDetailContainer;
