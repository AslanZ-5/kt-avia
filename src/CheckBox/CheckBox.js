import React from "react";
import PropTypes from "prop-types";
import classes from "./CheckBox.module.scss";

const CheckBox = ({ text, disabled, checked }) => {
  return (
    <label className={`${classes.control} ${classes.control_checkbox}`}>
      {text}
      <input type="checkbox" disabled={disabled} checked={checked} />
      <div className={classes.control_indicator} />
    </label>
  );
};
CheckBox.defaultProps = {
  text: "",
  disabled: "",
  checked: "",
};

CheckBox.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.string,
  disabled: PropTypes.string,
};
export default CheckBox;
