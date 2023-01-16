import { configureStore } from "@reduxjs/toolkit";

import checkboxReducer from "./features/checkbox/checkboxSlice";

const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});
export default store;
