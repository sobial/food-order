import Card from "../UI/Card";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import headerImg from "../../header.jpg";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className={styles.img_shape}>
        <img src={headerImg} alt="this is dummy pic" />
      </div>
    </React.Fragment>
  );
};
export default Header;
