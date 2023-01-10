import React from "react";

import classes from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filter}>
        <h3 className={classes.header}>Количество пересадок</h3>
        <div className={classes.control_group}>
          <label className={`${classes.control} ${classes.control_checkbox}`}>
            Все
            <input type="checkbox" />
            <div className={classes.control_indicator} />
          </label>
          <label className={`${classes.control} ${classes.control_checkbox}`}>
            Без пересадок
            <input type="checkbox" checked="checked" />
            <div className={classes.control_indicator} />
          </label>
          <label className={`${classes.control} ${classes.control_checkbox}`}>
            1 пересадка
            <input type="checkbox" />
            <div className={classes.control_indicator} />
          </label>
          <label className={`${classes.control} ${classes.control_checkbox}`}>
            2 пересадки
            <input type="checkbox" />
            <div className={classes.control_indicator} />
          </label>
          <label className={`${classes.control} ${classes.control_checkbox}`}>
            3 пересадки
            <input type="checkbox" />
            <div className={classes.control_indicator} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
