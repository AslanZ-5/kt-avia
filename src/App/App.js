import React from "react";
import classes from "./App.module.scss";
import Logo from "../Logo";
import Filter from "../Filter";
import TicketsList from "../TicketsList/TicketsList";

const App = () => {
  return (
    <div className={classes.App}>
      <Logo />
      <div className={classes.container}>
        <Filter />
        <TicketsList />
      </div>
    </div>
  );
};

export default App;
