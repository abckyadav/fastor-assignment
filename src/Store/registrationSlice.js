import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country_code: "",
  phone: "",
  token: "",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,

  reducers: {
    addNumber: (state, action) => {
      state.country_code = action.payload.country_code;
      state.phone = action.payload.phone;
    },
    addToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { addNumber, addToken } = registrationSlice.actions;

export default registrationSlice.reducer;
