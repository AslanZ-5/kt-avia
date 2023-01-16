import React from "react";
import PropTypes from "prop-types";
import classes from "./CheckBox.module.scss";

const CheckBox = ({ text, disabled, checked, value, onCheckChange }) => {
  return (
    <label className={`${classes.control} ${classes.control_checkbox}`}>
      {text}
      <input
        type="checkbox"
        onChange={(e) => {
          onCheckChange(e);
        }}
        disabled={disabled}
        value={value}
        checked={checked}
      />
      <div className={classes.control_indicator} />
    </label>
  );
};
CheckBox.defaultProps = {
  text: "",
  disabled: "",
  checked: "",
  value: [],
  onCheckChange: () => {},
};

CheckBox.propTypes = {
  text: PropTypes.string,
  value: PropTypes.array,
  checked: PropTypes.string,
  disabled: PropTypes.string,
  onCheckChange: PropTypes.func,
};
export default CheckBox;
