import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./App.module.scss";
import Logo from "../Logo";
import Filter from "../Filter";
import TicketsList from "../TicketsList";
import { getTicketItems } from "../../features/tickets/ticketsSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicketItems());
  }, []);
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
