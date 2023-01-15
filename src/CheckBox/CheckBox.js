import React from "react";
import PropTypes from "prop-types";
import classes from "./CheckBox.module.scss";

const CheckBox = ({ text, disabled, checked }) => {
  return (
    <label className={`${classes.control} ${classes.control_checkbox}`}>
      {text}
      <input
        type="checkbox"
        onChange={(e) => {
          console.log(e);
        }}
        disabled={disabled}
        checked={checked}
      />
      <div className={classes.control_indicator} />
    </label>
  );
};
CheckBox.defaultProps = {
  text: "",
  disabled: "",
  checked: false,
};

CheckBox.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.string,
};
export default CheckBox;
