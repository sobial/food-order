import Card from "./UI/Card";
import styles from "./FoodList.module.css";
import React from "react";
import Meal from "./Meal";

const flist = [
  { name: "kabab", id: "f1" },
  { name: "abgoosht", id: "f2" },
  { name: "gheime", id: "f3" },
  { name: "jooje", id: "f4" },
  { name: "an", id: "f5" },
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
        <list>
          {flist.map((meal) => {
            return (
              <ul key={meal.id} className={styles.list_item}>
                <Meal meal={meal} />
              </ul>
            );
          })}
        </list>
      </Card>
    </React.Fragment>
  );
};
export default FoodList;
