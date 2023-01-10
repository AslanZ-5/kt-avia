import React from "react";
import Tabs from "../Tabs";
import Ticket from "../Ticket";
import classes from "./TicketsList.module.scss";

const TicketsList = () => {
  return (
    <div className={classes.tickets}>
      <Tabs />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={classes.btn}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default TicketsList;
