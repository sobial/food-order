import Card from "./UI/Card";
import styles from "./FoodList.module.css";
import React from "react";
import Meal from "./Meal";

const flist = [
  {
    name: "kabab",
    id: "f1",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
  {
    name: "abgoosht",
    id: "f2",
    price: "233.4",
    ingredients: " bah ,khiar ,khaviar",
  },
  {
    name: "gheime",
    id: "f3",
    price: "43.43",
    ingredients: "piaz, sabzi ,goosht, bah ,khiar ,khaviar",
  },
  {
    name: "jooje",
    id: "f4",
    price: "34.65",
    ingredients: "goosht morgh, zaferoon , bah ,khiar ,khaviar",
  },
  { name: "an", id: "f5", price: "23.43", ingredients: "goh" },
  {
    name: "kookoo",
    id: "f6",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
  {
    name: "estamboli",
    id: "f7",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
  {
    name: "maahi",
    id: "f8",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
  {
    name: "shirin polo",
    id: "f9",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
  {
    name: "aash",
    id: "f10",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
  {
    name: "soup",
    id: "f11",
    price: "23.43",
    ingredients: "goosht, bah ,khiar ,khaviar",
  },
];

const FoodList = (props) => {
  return (
    <React.Fragment>
      <Card className={styles.discription}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          metus a elit bibendum euismod. Praesent aliquet libero in maximus
          mattis. Ut metus dolor, egestas et porttitor vel, varius vel nisi.
          Maecenas non arcu vestibulum, semper nulla sit amet, sagittis nisi.
          Proin egestas ipsum maximus mi elementum iaculis.
        </p>
      </Card>

      <Card className={styles.list_card}>
        <li>
          {flist.map((meal) => {
            return (
              <ul key={meal.id} className={styles.list_item}>
                <Meal meal={meal} />
                <hr />
              </ul>
            );
          })}
        </li>
      </Card>
    </React.Fragment>
  );
};
export default FoodList;
