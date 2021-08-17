import Card from "./UI/Card";
import styles from "./FoodList.module.css";
import React from "react";

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
        {props.meals.map((meal) => {
          return <div key={meal.id}>{meal.name}</div>;
        })}
      </Card>
    </React.Fragment>
  );
};
export default FoodList;
