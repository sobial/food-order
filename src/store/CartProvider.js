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
        newTotalAmount =
          Math.round(
            (newTotalAmount + action.item.amount * action.item.price) * 100
          ) / 100;
        console.log(newTotalAmount);
        found = true;
        return;
      }
    });

    if (!found) {
      clone.push(action.item);
      newTotalAmount =
        Math.round(
          (newTotalAmount + action.item.amount * action.item.price) * 100
        ) / 100;
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
  if (action.type === "REMOVE") {
    let newTotalAmount = state.totalAmount;
    let clone = [...state.items];
    let index = clone.findIndex((item) => item.id === action.id);

    if (state.items[index].amount === 1) {
      newTotalAmount =
        Math.round((newTotalAmount - clone[index].price) * 100) / 100;
      clone.splice(index, 1);
      return {
        totalAmount: newTotalAmount,
        items: clone,
      };
    }
    if (state.items[index].amount > 1) {
      newTotalAmount =
        Math.round((newTotalAmount - clone[index].price) * 100) / 100;
      clone[index] = {
        ...state.items[index],
        amount: state.items[index].amount - 1,
      };

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
    cartStateDispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    cartStateDispatch({ type: "REMOVE", id: id });
  };

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
