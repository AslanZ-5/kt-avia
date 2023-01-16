import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedOptions: { "1 пересадка": "1", "2 пересадки": "2" },
  checkAll: false,
};

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleChecked: (state, { payload }) => {
      const [name, val] = payload[1].split(",");
      const checked = payload[0];
      if (checked) {
        state.checkedOptions = { ...state.checkedOptions, ...{ [name]: val } };
      } else {
        const list = { ...state.checkedOptions };
        delete list[name];
        state.checkedOptions = list;
      }
      if (Object.values(state.checkedOptions).length === 4) {
        state.checkAll = true;
      } else {
        state.checkAll = false;
      }
    },
    allChecked: (state, { payload }) => {
      const { options, checked } = payload;
      state.checkedOptions = options;
      state.checkAll = checked;
    },
  },
});

export const { toggleChecked, allChecked } = checkboxSlice.actions;
export default checkboxSlice.reducer;
