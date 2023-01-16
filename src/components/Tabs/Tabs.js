import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSorting } from "../../features/sort/sortSlice";
import classes from "./Tabs.module.scss";

const Tabs = () => {
  const { sortBy } = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const sortOptions = {
    "Самый дешевый": "cheapest",
    "Самый быстрый": "fastest",
    Оптимальный: "optimal",
  };
  return (
    <ul
      className={classes.tabs}
      onClick={(e) => dispatch(addSorting(e.target.dataset.sort))}
    >
      {Object.keys(sortOptions).map((key) => {
        const value = sortOptions[key];
        if (value === sortBy) {
          return (
            <li
              data-sort={value}
              key={value}
              className={`${classes.tab} ${classes.active}`}
            >
              {key}
            </li>
          );
        }
        return (
          <li data-sort={value} key={value} className={classes.tab}>
            {key}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
