import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./App.module.scss";
import Logo from "../Logo";
import Filter from "../Filter";
import TicketsList from "../TicketsList";
import { addSearchId } from "../../features/tickets/ticketsSlice";

const App = () => {
  const { searchId } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://aviasales-test-api.kata.academy/search")
      .then((data) => data.json())
      .then((data) => {
        if (!searchId) {
          dispatch(addSearchId(data.searchId));
        }
      });

    return () => {
      dispatch(addSearchId(""));
    };
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
