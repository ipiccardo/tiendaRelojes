import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { CategoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollectionRef = collection(db, "Item");

    function getProducts(itemsCollectionQuery) {
      getDocs(itemsCollectionQuery)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch((err) => err);
    }

    if (CategoryId === undefined) {
      getProducts(itemsCollectionRef);
    } else {
      const q = query(
        itemsCollectionRef,
        where("category", "==", `${CategoryId}`)
      );
      getProducts(q);
    }
  }, [CategoryId]);

  return (
    <div>
      <h1>
        {greeting}
        {CategoryId}
      </h1>
      <ItemList key={products.id} products={products} />
    </div>
  );
};

export default ItemListContainer;
