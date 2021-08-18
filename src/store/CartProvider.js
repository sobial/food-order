import React, { useReducer } from "react";
import CartContext from "./CartContext";

const deflautVal = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newItems = state.items.concat(action.item);
    const newAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: newItems,
      totalAmount: newAmount,
    };
  }
  return deflautVal;
};

const CartProvider = (props) => {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, deflautVal);

  const addItemHandler = (item) => {
    console.log(item.name);
    cartStateDispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
