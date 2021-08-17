import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.main_container}>
      <li className={styles.cart_list}>
        <ul className={styles.list_item}>
          <div>
            <h3>kabab</h3>
            <div className={styles.price_container}>
              <p>$24.65</p>
              <div className={styles.amount}>x2</div>
            </div>
          </div>
          <div className={styles.button_cantainer}>
            <button>+</button>
            <button>-</button>
          </div>
        </ul>
        <hr />
      </li>
      <div className={styles.footer}>
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <h3>24.65</h3>
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
