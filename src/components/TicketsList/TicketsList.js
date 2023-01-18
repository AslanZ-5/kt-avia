import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import {
  getTicketItems,
  sortCheapest,
  sortFastest,
  sortOptimal,
} from "../../features/tickets/ticketsSlice";
import Tabs from "../Tabs";
import Ticket from "../Ticket";
import classes from "./TicketsList.module.scss";

const TicketsList = () => {
  const dispatch = useDispatch();
  const { searchId, ticketItems, requests, stop } = useSelector(
    (state) => state.tickets,
  );
  const { sortBy } = useSelector((state) => state.sort);
  const { checkedOptions } = useSelector((state) => state.checkbox);
  const options = Object.values(checkedOptions);
  useEffect(() => {
    if (!stop && searchId) {
      dispatch(getTicketItems(searchId));
    }
  }, [searchId, requests]);
  useEffect(() => {
    if (sortBy === "cheapest") {
      dispatch(sortCheapest());
    } else if (sortBy === "fastest") {
      dispatch(sortFastest());
    } else if (sortBy === "optimal") {
      dispatch(sortOptimal());
    }
  }, [sortBy, checkedOptions]);

  const tickets = [
    ...ticketItems
      .filter((item) => {
        return (
          options.includes(String(item.segments[0].stops.length)) ||
          options.includes(String(item.segments[1].stops.length))
        );
      })
      .slice(0, 5),
  ];
  return (
    <div className={classes.tickets}>
      <Tabs />
      {!stop && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 30,
                margin: 20,
              }}
              spin
            />
          }
        />
      )}
      {!tickets.length && (
        <h4>Рейсов, подходящих под заданные фильтры, не найдено</h4>
      )}
      {tickets?.map((ticket) => {
        return <Ticket key={shortid.generate()} ticket={ticket} />;
      })}
      <button className={classes.btn}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default TicketsList;
