import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import styles from "./Cart.module.css";

const CartItem = (props) => {
  return (
    <React.Fragment>
      <ul className={styles.list_item}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.price_container}>
            <p>{props.price}</p>
            <div className={styles.amount}>x {props.amount}</div>
          </div>
        </div>
        <div className={styles.button_cantainer}>
          <button>+</button>
          <button>-</button>
        </div>
      </ul>
      <hr />
    </React.Fragment>
  );
};

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const totalPrice = cartCtx.items.reduce((prevVal, item) => {
  //   return prevVal + item.amount;
  // }, 0);

  return (
    <div className={styles.main_container}>
      <li className={styles.cart_list}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          );
        })}
      </li>
      <div className={styles.footer}>
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <h3>{cartCtx.totalAmount}</h3>
        </div>
        <div className={styles.submit_button}>
          <button className={styles.close_button}>close</button>
          <button className={styles.order_button}>Order</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
