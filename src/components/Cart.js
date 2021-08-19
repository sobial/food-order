import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
      id: `${Math.random()}`,
    });
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className={styles.main_container}>
      <li className={styles.cart_list}>
        {cartCtx.items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ul className={styles.list_item}>
                <div>
                  <h3>{item.name}</h3>
                  <div className={styles.price_container}>
                    <p>{item.price}</p>
                    <div className={styles.amount}>x {item.amount}</div>
                  </div>
                </div>
                <div className={styles.button_cantainer}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      onAddHandler(item);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      onRemoveHandler(item.id);
                    }}
                  >
                    -
                  </button>
                </div>
              </ul>
              <hr />
            </React.Fragment>
          );
        })}
      </li>
      <div className={styles.footer}>
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <h3>{cartCtx.totalAmount}</h3>
        </div>
        <div className={styles.submit_button}>
          <button className={styles.close_button} onClick={props.onClose}>
            close
          </button>
          {cartCtx.items.length ? (
            <button className={styles.order_button}>Order</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
