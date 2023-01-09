import React from "react";
import classes from "./Tabs.module.scss";

const Tabs = () => {
  return (
    <ul className={classes.tabs}>
      <li className={`${classes.tab} ${classes.active}`}>Самый дешевый</li>
      <li className={classes.tab}>Самый быстрый</li>
      <li className={classes.tab}>Оптимальный</li>
    </ul>
  );
};

export default Tabs;
