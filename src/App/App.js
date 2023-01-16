import React from "react";
import classes from "./App.module.scss";
import Logo from "../Logo";
import Filter from "../Filter";
import TicketsList from "../TicketsList/TicketsList";

const App = () => {
  // useEffect(() => {
  //   fetch(
  //     "https://aviasales-test-api.kata.academy/tickets?searchId=8f9da2672ade9b94c81a0e99cba837ca",
  //   )
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
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
