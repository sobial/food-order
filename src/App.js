import Header from "./components/Header/Header";
import FoodList from "./components/FoodList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <FoodList />
      </main>
    </div>
  );
}

export default App;
