import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationSlice";
import restaurantsReducer from "./resturantSlice";

const rootReducer = {
  info: registrationReducer,
  restaurants: restaurantsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
