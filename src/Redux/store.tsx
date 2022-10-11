import { configureStore } from "@reduxjs/toolkit";
import { budgetSlice } from "./Reducers/budgetSlice";
import { companyInfoSlice } from "./Reducers/companyInfoSlice";
import { movieInfoSlice } from "./Reducers/movieInfoSlice";

export const store = configureStore({
  reducer: {
    movieInfo: movieInfoSlice.reducer,
    companyInfo: companyInfoSlice.reducer,
    budgetInfo: budgetSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
