import Item from "../Item/Item";
import "./ItemList.css";
import Loader from "../../../Services/Loader/Loader";

export default function ItemList({ products }) {
  return (
    <div
      class="flexBox"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "60px",
        flexWrap: "wrap",
        maxWidth: "1300px",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {products.length === 0 ? (
        <Loader animation="wave" />
      ) : (
        products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              /* description = {product.description}*/
              category={product.category}
              pictureUrl={product.pictureUrl}
              price={product.price}
              stock={product.stock}
              title={product.title}
            />
          );
        })
      )}
    </div>
  );
}
