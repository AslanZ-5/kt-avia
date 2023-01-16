import React from "react";
import { useSelector } from "react-redux";
import Tabs from "../Tabs";
import Ticket from "../Ticket";
import classes from "./TicketsList.module.scss";

const TicketsList = () => {
  const { ticketItems } = useSelector((state) => state.tickets);
  return (
    <div className={classes.tickets}>
      <Tabs />
      {ticketItems?.map((ticket) => (
        <Ticket key={`${ticket.price}${ticket.carrier}`} ticket={ticket} />
      ))}
      <button className={classes.btn}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default TicketsList;
