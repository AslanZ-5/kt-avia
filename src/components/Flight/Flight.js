import React from "react";
import PropTypes from "prop-types";
import classes from "./Flight.module.scss";

const Flight = ({ segment }) => {
  const { origin, destination, date, stops, duration } = segment;
  const transQuantity = typeof stops === "string" ? 1 : stops.length;
  const trans = transQuantity > 1 ? "пересадки" : "пересадка";
  return (
    <div className={classes.flight}>
      <div className={classes.info}>
        <div>
          {origin} - {destination}
        </div>
        <div>{date}</div>
      </div>
      <div className={classes.info}>
        <div>В ПУТИ</div>
        <div>{duration}</div>
      </div>
      <div className={classes.info}>
        <div>
          {transQuantity} {transQuantity && trans}
        </div>
        <div>{stops.join(", ")}</div>
      </div>
    </div>
  );
};

Flight.defaultProps = {
  segment: {},
};

Flight.propTypes = {
  segment: PropTypes.object,
};

export default Flight;
