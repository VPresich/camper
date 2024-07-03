import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/campers/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
