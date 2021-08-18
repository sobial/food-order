import React from "react";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const onClose = (event) => {
    props.onClose(event);
  };
  return (
    <React.Fragment>
      <div className={styles.backdrop}>
        <Card className={styles.modal_card}>{props.children}</Card>
      </div>
    </React.Fragment>
  );
};
export default Modal;
