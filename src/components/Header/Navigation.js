import styles from "./Navigation.module.css";
const Navigation = (props) => {
  return (
    <div className={styles.nav_bar}>
      <h1>ReactMeals</h1>
      <button>Cart</button>
    </div>
  );
};
export default Navigation;
