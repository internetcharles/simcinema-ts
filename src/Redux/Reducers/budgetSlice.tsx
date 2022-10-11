import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BudgetState {
  budget: number;
  moneyRemaining: number;
  hype: number;
  adInfo: {
    tvCommercials: number;
    movieTrailers: number;
    magazineNewspaperAds: number;
    posters: number;
  };
}

const initialState: BudgetState = {
  budget: 0,
  moneyRemaining: 0,
  hype: 0,
  adInfo: {
    tvCommercials: 0,
    movieTrailers: 0,
    magazineNewspaperAds: 0,
    posters: 0,
  },
};

export const budgetSlice = createSlice({
  name: "budgetInfo",
  initialState,
  reducers: {
    setBudget: (state, action: PayloadAction<number>) => {
      state.budget = action.payload;
      state.moneyRemaining = action.payload;
    },
    adjustMoneyRemaining: (state, action: PayloadAction<number>) => {
      state.moneyRemaining -= action.payload;
    },
    resetBudget: (state) => {
      return initialState;
    },
    adjustHype: (state, action: PayloadAction<number>) => {
      state.hype += action.payload;
    },
    addTvCommercials: (state) => {
      state.adInfo.tvCommercials += 1;
      state.hype += 6;
      state.moneyRemaining -= 6;
    },
    addMovieTrailers: (state) => {
      state.adInfo.movieTrailers += 1;
      state.hype += 4;
      state.moneyRemaining -= 4;
    },
    addMagazineNewspaperAds: (state) => {
      state.adInfo.magazineNewspaperAds += 1;
      state.hype += 2;
      state.moneyRemaining -= 2;
    },
    addPosters: (state) => {
      state.adInfo.posters += 1;
      state.hype += 1;
      state.moneyRemaining -= 1;
    },
  },
});

export const {
  setBudget,
  adjustMoneyRemaining,
  resetBudget,
  adjustHype,
  addMagazineNewspaperAds,
  addMovieTrailers,
  addPosters,
  addTvCommercials,
} = budgetSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectBudget = (state: RootState) => state.budgetInfo;

export default budgetSlice.reducer;
