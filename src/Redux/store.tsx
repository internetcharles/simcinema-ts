import { configureStore } from "@reduxjs/toolkit";
import { budgetSlice } from "./Reducers/budgetSlice";
import { companyInfoSlice } from "./Reducers/companyInfoSlice";
import { movieInfoSlice } from "./Reducers/movieInfoSlice";
import { qualitySlice } from "./Reducers/qualitySlice";

export const store = configureStore({
  reducer: {
    movieInfo: movieInfoSlice.reducer,
    companyInfo: companyInfoSlice.reducer,
    budgetInfo: budgetSlice.reducer,
    quality: qualitySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
