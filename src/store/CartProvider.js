import React, { useReducer } from "react";
import CartContext from "./CartContext";

const deflautVal = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let found = false;
    let clone = [...state.items];
    let newTotalAmount = state.totalAmount;

    //search for any duplication
    state.items.find((item, index) => {
      if (item.name === action.item.name) {
        const newItem = { ...item, amount: item.amount + action.item.amount };
        clone[index] = newItem;
        newTotalAmount += action.item.amount * action.item.price;
        found = true;
        return;
      }
    });

    if (!found) {
      clone.push(action.item);
      newTotalAmount += action.item.amount * action.item.price;
      return {
        items: clone,
        totalAmount: newTotalAmount,
      };
    } else {
      return {
        items: clone,
        totalAmount: newTotalAmount,
      };
    }
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
