import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [qtdItems, setQtdItems] = useState(0);

  function icrementCart() {
    setQtdItems((prev) => prev + 1);
  }

  function addCartItem(item) {
    setCartItems((currItems) => {
      if (currItems.find((itemCart) => itemCart.id === item.id) == null) {
        icrementCart();
        return [...currItems, { ...item, quantity: 1 }];
      } else {
        return currItems.map((itemCart) => {
          if (itemCart.id === item.id) {
            return { ...itemCart, quantity: itemCart.quantity + 1 };
          } else {
            return itemCart;
          }
        });
      }
    });
  }

  return (
    <>
      <CartContext.Provider value={{ cartItems, addCartItem, qtdItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
