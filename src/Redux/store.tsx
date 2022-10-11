import { configureStore } from "@reduxjs/toolkit";
import { companyInfoSlice } from "./Reducers/companyInfoSlice";
import { movieInfoSlice } from "./Reducers/movieInfoSlice";

export const store = configureStore({
  reducer: {
    movieInfo: movieInfoSlice.reducer,
    companyInfo: companyInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
