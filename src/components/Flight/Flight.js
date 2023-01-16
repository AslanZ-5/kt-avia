import React from "react";
import PropTypes from "prop-types";
import classes from "./Flight.module.scss";

const Flight = ({ codes, time, transfer, duration }) => {
  const transQuantity = transfer.length;
  const trans = transQuantity > 1 ? "пересадки" : "пересадка";
  return (
    <div className={classes.flight}>
      <div className={classes.info}>
        <div>
          {codes[0]} - {codes[1]}
        </div>
        <div>{time}</div>
      </div>
      <div className={classes.info}>
        <div>В ПУТИ</div>
        <div>{duration}</div>
      </div>
      <div className={classes.info}>
        <div>
          {transQuantity} {transQuantity && trans}
        </div>
        <div>{transfer.join(", ")}</div>
      </div>
    </div>
  );
};

Flight.defaultProps = {
  codes: [],
  time: "",
  transfer: [],
  duration: "",
};

Flight.propTypes = {
  codes: PropTypes.array,
  time: PropTypes.string,
  transfer: PropTypes.array,
  duration: PropTypes.string,
};

export default Flight;
