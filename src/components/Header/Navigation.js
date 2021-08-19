import reactDom from "react-dom";
import { useState, useContext } from "react";
import CartContext from "../../store/CartContext";

import Modal from "../UI/Modal";
import Cart from "../Cart";

import styles from "./Navigation.module.css";
const Navigation = (props) => {
  const [modalState, setModalState] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalNumber = cartCtx.items.reduce((prevVal, item) => {
    return prevVal + item.amount;
  }, 0);

  const onModalHandler = (event) => {
    event.preventDefault();
    setModalState(true);
  };
  const onCloseModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };
  return (
    <div className={styles.nav_bar}>
      <h1>ReactMeals</h1>
      <button onClick={onModalHandler}>
        <span>Cart</span>
        <span className={styles.badge}>{totalNumber}</span>
      </button>
      {modalState
        ? reactDom.createPortal(
            <Modal onClose={onCloseModal}>
              <Cart onClose={onCloseModal} />
            </Modal>,
            document.getElementById("modal-container")
          )
        : ""}
    </div>
  );
};
export default Navigation;
