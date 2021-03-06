import React, { useContext } from "react";

import styles from "./Meal.module.css";
import CartContext from "../store/CartContext";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);

  const inputRef = React.createRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      name: props.meal.name,
      price: props.meal.price,
      amount: parseInt(inputRef.current.value),
      id: props.meal.id,
    });
    inputRef.current.value = "";
  };
  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.detail_container}>
          <h3>{props.meal.name}</h3>
          <p className={styles.ingredients}>{props.meal.ingredients}</p>
          <p className={styles.price}>{props.meal.price}</p>
        </div>
        <div className={styles.submit_container}>
          <div className={styles.amount_container}>
            <label>Amount</label>
            <input type="number" step="1" min="1" ref={inputRef} />
          </div>
          <button type="submit">+Add</button>
        </div>
      </form>
    </React.Fragment>
  );
};
export default Meal;
