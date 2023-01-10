import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import classes from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filter}>
        <h3 className={classes.header}>Количество пересадок</h3>
        <div className={classes.control_group}>
          <CheckBox text="Все" />
          <CheckBox text=" Без пересадок" checked="checked" />
          <CheckBox text=" 1 пересадка" checked="checked" />
          <CheckBox text="2 пересадки" checked="checked" />
          <CheckBox text="3 пересадки" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
