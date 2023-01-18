import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ticketItems: [],
  isLoading: true,
  stop: false,
  searchId: "",
  requests: 0,
};

const url = "https://aviasales-test-api.kata.academy/";
export const getTicketItems = createAsyncThunk(
  "tickets/getTicketItems",
  async (searchId) => {
    try {
      const ticketsResp = await axios(`${url}tickets?searchId=${searchId}`);
      return ticketsResp.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addSearchId: (state, { payload }) => {
      state.searchId = payload;
    },
    cleanItems: (state) => {
      state.ticketItems = [];
    },
    sortCheapest: (state) => {
      state.ticketItems = state.ticketItems.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price),
      );
    },
    sortFastest: (state) => {
      state.ticketItems = state.ticketItems.sort(
        (a, b) =>
          parseFloat(a.segments[0].duration + a.segments[1].duration) -
          parseFloat(b.segments[0].duration + b.segments[1].duration),
      );
    },
    sortOptimal: (state) => {
      state.ticketItems = state.ticketItems.sort((a, b) => {
        if (a.carrier > b.carrier) {
          return 1;
        }
        if (a.carrier < b.carrier) {
          return -1;
        }
        return 0;
      });
    },
  },
  extraReducers: {
    [getTicketItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getTicketItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.tickets) {
        state.ticketItems = [...state.ticketItems, ...payload.tickets];
        state.stop = payload.stop;
        state.requests += 1;
      }
    },
    [getTicketItems.rejected]: (state) => {
      state.isLoading = false;
      state.requests += 1;
    },
  },
});

export const {
  addSearchId,
  cleanItems,
  sortCheapest,
  sortFastest,
  sortOptimal,
} = ticketsSlice.actions;
export default ticketsSlice.reducer;
