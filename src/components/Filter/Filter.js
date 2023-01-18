import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckBox from "../CheckBox";
import { allChecked } from "../../features/checkbox/checkboxSlice";
import classes from "./Filter.module.scss";

const plainOptions = [
  ["Без пересадок", "0"],
  ["1 пересадка", "1"],
  ["2 пересадки", "2"],
  ["3 пересадки", "3"],
];
const Filter = () => {
  const dispatch = useDispatch();
  const { checkAll, checkedOptions } = useSelector((state) => {
    return state.checkbox;
  });

  const onCheckAllChange = (e) => {
    const options = e.target.checked ? Object.fromEntries(plainOptions) : {};
    const { checked } = e.target;
    dispatch(allChecked({ options, checked }));
  };
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filter}>
        <h3 className={classes.header}>Количество пересадок</h3>

        <CheckBox
          onCheckChange={onCheckAllChange}
          checked={checkAll ? "checked" : ""}
          text="Все"
        />

        {plainOptions.map((option) => {
          const [name, value] = option;
          const checked = checkedOptions[name] > -1 ? "checked" : "";

          return (
            <CheckBox
              key={value}
              value={option}
              text={name}
              checked={checked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
