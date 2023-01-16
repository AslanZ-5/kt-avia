import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import classes from "./Filter.module.scss";

const plainOptions = [
  ["Без пересадок", 0],
  ["1 пересадка", 1],
  ["2 пересадки", 2],
  ["3 пересадки", 3],
];
const defaultCheckedList = { "1 пересадка": "1", "2 пересадки": "2" };
const Filter = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkAll, setCheckAll] = useState("");
  const onChange = (e) => {
    const { checked, value } = e.target;
    const [name, val] = value.split(",");
    if (checked) {
      setCheckedList({ ...checkedList, ...{ [name]: val } });
    } else {
      const list = { ...checkedList };
      delete list[name];
      setCheckedList(list);
    }

    // setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? Object.fromEntries(plainOptions) : {});
    setCheckAll(e.target.checked ? "checked" : "");
  };
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filter}>
        <h3 className={classes.header}>Количество пересадок</h3>

        <CheckBox
          onCheckChange={onCheckAllChange}
          checked={checkAll}
          text="Все"
        />

        {plainOptions.map((option) => {
          const [name, value] = option;
          const checked = checkedList[name] > -1 ? "checked" : "";

          return (
            <CheckBox
              onCheckChange={onChange}
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
