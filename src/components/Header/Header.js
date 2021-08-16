import Card from "../UI/Card";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.img_shape}>here the image</div>
      <Card className={styles.card}>here the discription card</Card>
    </div>
  );
};
export default Header;
