import Header from "./components/Header/Header";
import FoodList from "./components/FoodList";
import styles from "./App.module.css";

const flist = [
  { name: "kabab", id: "f1" },
  { name: "abgoosht", id: "f2" },
  { name: "gheime", id: "f3" },
  { name: "jooje", id: "f4" },
  { name: "an", id: "f5" },
];

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <FoodList meals={flist} />
      </main>
    </div>
  );
}

export default App;
