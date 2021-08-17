import styles from "./Navigation.module.css";
import Modal from "../UI/Modal";
import reactDom from "react-dom";
import { useState } from "react";

const Navigation = (props) => {
  const [modalState, setModalState] = useState(false);

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
      <button onClick={onModalHandler}>Cart</button>
      {modalState
        ? reactDom.createPortal(
            <Modal onClose={onCloseModal} />,
            document.getElementById("modal-container")
          )
        : ""}
    </div>
  );
};
export default Navigation;
