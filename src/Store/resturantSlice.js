import { createSlice } from "@reduxjs/toolkit";

const initialState = { resturantData: [] };

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.resturantData = action.payload;
    },
  },
});

export const { addData } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
