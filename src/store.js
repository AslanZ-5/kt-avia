import { configureStore } from "@reduxjs/toolkit";

import checkboxReducer from "./features/checkbox/checkboxSlice";
import sortReducer from "./features/sort/sortSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    sort: sortReducer,
  },
});
export default store;
