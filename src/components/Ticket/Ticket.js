import React from "react";
import PropTypes from "prop-types";
import classes from "./Ticket.module.scss";
import img from "./S7.jpg";
import Flight from "../Flight";

const Ticket = ({ ticket }) => {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <div className={classes.price}>{ticket.price}</div>
        <img className={classes.img} src={img} alt="ds" />
      </div>
      <Flight segment={ticket.segments[0]} />
      <Flight segment={ticket.segments[1]} />
    </div>
  );
};

Ticket.defaultProps = {
  ticket: {},
};
Ticket.propTypes = {
  ticket: PropTypes.object,
};
export default Ticket;
