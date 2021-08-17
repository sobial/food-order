import React from "react";

import styles from "./Meal.module.css";

const Meal = (props) => {
  return (
    <React.Fragment>
      <form>
        <div className={styles.detail_container}>
          <h3>{props.meal.name}</h3>
          <p className={styles.ingredients}>{props.meal.ingredients}</p>
          <p className={styles.price}>{props.meal.price}</p>
        </div>
        <div className={styles.submit_container}>
          <div className={styles.amount_container}>
            <label>Amount</label>
            <input type="number" step="1" min="1" />
          </div>
          <button type="submit">+Add</button>
        </div>
      </form>
    </React.Fragment>
  );
};
export default Meal;
