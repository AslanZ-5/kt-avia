import React from "react";
import Tabs from "../Tabs";
import Ticket from "../Ticket";
import classes from "./TicketsList.module.scss";

const TicketsList = () => {
  return (
    <div className={classes.tickets}>
      <Tabs />
      <h1>Tickets</h1>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;
