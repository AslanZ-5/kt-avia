import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ticketItems: [],
  isLoading: true,
  stop: false,
};
const url = " https://aviasales-test-api.kata.academy/";
export const getTicketItems = createAsyncThunk(
  "tickets/getTicketItems",
  async () => {
    try {
      const resp = await fetch(`${url}search`);
      const dt = await resp.json();
      const { searchId } = dt;
      const ticketsResp = await axios(`${url}tickets?searchId=${searchId}`);
      return ticketsResp.data;
    } catch (error) {
      return error;
    }
  },
);
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  extraReducers: {
    [getTicketItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getTicketItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.ticketItems = payload.tickets;
      state.stop = payload.stop;
    },
    //     [getTicketItems.rejected]: (state) => {
    //       state.isLoading = false;
    //     },
  },
});

export default ticketsSlice.reducer;
