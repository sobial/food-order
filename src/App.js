import Header from "./components/Header/Header";
import FoodList from "./components/FoodList";
import styles from "./App.module.css";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className={styles.App}>
        <Header />
        <main className={styles.main}>
          <FoodList />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
