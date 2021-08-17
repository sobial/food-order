import React from "react";

const Meal = (props) => {
  return (
    <React.Fragment>
      <div>{props.meal.name}</div>
    </React.Fragment>
  );
};
export default Meal;
