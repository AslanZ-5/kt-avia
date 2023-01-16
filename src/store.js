import { configureStore } from "@reduxjs/toolkit";

import checkboxReducer from "./features/checkbox/checkboxSlice";
import sortReducer from "./features/sort/sortSlice";
import ticketsReducer from "./features/tickets/ticketsSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    sort: sortReducer,
    tickets: ticketsReducer,
  },
});
export default store;
