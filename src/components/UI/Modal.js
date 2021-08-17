import React from "react";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const onClose = (event) => {
    props.onClose(event);
  };
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={onClose}>
        <Card className={styles.modal_card}>
          <button onClick={onClose}>close</button>
          {props.list}
        </Card>
      </div>
    </React.Fragment>
  );
};
export default Modal;
