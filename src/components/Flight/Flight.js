import React from "react";
import PropTypes from "prop-types";
import classes from "./Flight.module.scss";

const Flight = ({ segment }) => {
  const { origin, destination, date, stops, duration } = segment;
  const transQuantity = typeof stops === "string" ? 1 : stops.length;
  const trans = transQuantity > 1 ? "пересадки" : "пересадка";
  const takeOFf = new Date(date);
  const arrive = new Date(takeOFf.getTime() + duration * 1000);
  return (
    <div className={classes.flight}>
      <div className={classes.info}>
        <div>
          {origin} - {destination}
        </div>
        <div>
          {`${takeOFf.getHours()}:${takeOFf.getMinutes()}`} -{" "}
          {`${arrive.getHours()}:${arrive.getMinutes()}`}
        </div>
      </div>
      <div className={classes.info}>
        <div>В ПУТИ</div>
        <div>
          {`${Math.floor(duration / 60)}ч
          ${duration - Math.floor(duration / 60) * 60}м`}
        </div>
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
