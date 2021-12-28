import { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const isInCart = (Item) => {
    return Cart.some((CartItem) => CartItem.id === Item.id);
  };

  const addItem = (Item) => {
    if (isInCart(Item)) {
      let totalQuantity = Item.Quantity;
      const newCartItem = Cart.map((CartItem) =>
        CartItem.id === Item.id
          ? { ...CartItem, Quantity: (totalQuantity += CartItem.Quantity) }
          : CartItem
      );
      setCart(newCartItem);
    } else {
      const newCartItem = [...Cart, Item];
      setCart(newCartItem);
    }
  };

  const removeItem = (id) => {
    const deleteItem = Cart.filter((Item) => Item.Id !== id);
    setCart(deleteItem);
  };

  const clear = () => setCart([]);

  const countItems = () => {
    if (Cart.length > 0) {
      let totalItems = 0;
      Cart.map((Item) => (totalItems += Item.Quantity));
      return totalItems;
    }
  };

  const cartTotal = () => {
    let totalPrice = 0;
    Cart.map((Item) => (totalPrice += Item.price * Item.Quantity));
    return totalPrice;
  };

  const CartContextValues = {
    Cart,
    setCart,
    addItem,
    removeItem,
    clear,
    countItems,
    cartTotal,
  };

  return (
    <CartContext.Provider value={CartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
