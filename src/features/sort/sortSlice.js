import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "optimal",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    addSorting: (state, { payload }) => {
      state.sortBy = payload;
    },
  },
});
export const { addSorting } = sortSlice.actions;

export default sortSlice.reducer;
