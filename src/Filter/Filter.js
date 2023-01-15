import React, { useState } from "react";
// import CheckBox from "../CheckBox/CheckBox";
import { Checkbox } from "antd";
import classes from "./Filter.module.scss";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Без пересадок",
  "1 пересадка",
  "2 пересадки",
  "3 пересадки",
];
const defaultCheckedList = ["1 пересадка", "2 пересадки"];
const Filter = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filter}>
        <h3 className={classes.header}>Количество пересадок</h3>

        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Все
        </Checkbox>
        <CheckboxGroup
          className="check-group"
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Filter;
