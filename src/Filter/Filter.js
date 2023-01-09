import React from "react";
import classes from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={classes.filter}>
      <h3>Количество пересадок</h3>
      <ul>
        <li>Все</li>
        <li>Без пересадок</li>
        <li>1 пересадка</li>
        <li>2 пересадки</li>
        <li>3 пересадки</li>
      </ul>
    </div>
  );
};

export default Filter;
