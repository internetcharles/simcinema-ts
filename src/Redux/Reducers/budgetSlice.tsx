import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BudgetState {
  distributor: string;
  budget: number;
  moneyRemaining: number;
  hype: number;
  targetHype: number;
  earnings: number;
  adInfo: {
    tvCommercials: number;
    movieTrailers: number;
    magazineNewspaperAds: number;
    posters: number;
  };
}

const initialState: BudgetState = {
  distributor: "",
  budget: 0,
  moneyRemaining: 0,
  hype: 0,
  targetHype: 0,
  earnings: 0,
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
    setDistributor: (state, action: PayloadAction<string>) => {
      state.distributor = action.payload;
    },
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
      state.hype = action.payload;
    },
    adjustTargetHype: (state, action: PayloadAction<number>) => {
      state.targetHype = action.payload;
    },
    adjustEarnings: (state, action: PayloadAction<number>) => {
      state.earnings = action.payload;
    },
    addTvCommercials: (state) => {
      state.adInfo.tvCommercials += 1;
      state.targetHype += 12;
      state.moneyRemaining -= 6;
    },
    addMovieTrailers: (state) => {
      state.adInfo.movieTrailers += 1;
      state.targetHype += 8;
      state.moneyRemaining -= 4;
    },
    addMagazineNewspaperAds: (state) => {
      state.adInfo.magazineNewspaperAds += 1;
      state.targetHype += 4;
      state.moneyRemaining -= 2;
    },
    addPosters: (state) => {
      state.adInfo.posters += 1;
      state.targetHype += 2;
      state.moneyRemaining -= 1;
    },
  },
});

export const {
  setDistributor,
  setBudget,
  adjustMoneyRemaining,
  resetBudget,
  adjustHype,
  adjustTargetHype,
  adjustEarnings,
  addMagazineNewspaperAds,
  addMovieTrailers,
  addPosters,
  addTvCommercials,
} = budgetSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectBudget = (state: RootState) => state.budgetInfo;

export default budgetSlice.reducer;
