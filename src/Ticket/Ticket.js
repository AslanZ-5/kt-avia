import React from "react";
import classes from "./Ticket.module.scss";
import img from "./S7.jpg";
import Flight from "../Flight";

const Ticket = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <div className={classes.price}>13 400</div>
        <img className={classes.img} src={img} alt="ds" />
      </div>
      <Flight
        codes={["MOW", "HKT"]}
        time="10:45 - 08:00"
        transfer={["HKG", "JNB"]}
        duration="21ч 15м"
      />
      <Flight
        codes={["MOW", "HKT"]}
        time="11:20 - 00:50"
        transfer={["HKG"]}
        duration="13ч 30м"
      />
    </div>
  );
};

export default Ticket;
