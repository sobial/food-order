import Card from "../UI/Card";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import headerImg from "../../header.jpg";

const Header = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.img_shape}>
        <img src={headerImg} alt="this is dummy pic" />
        <Card className={styles.card}>here the discription card</Card>
      </div>
    </div>
  );
};
export default Header;
