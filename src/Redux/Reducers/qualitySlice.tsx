import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface QualityState {
  quality: number;
  reviews: {
    sodaCityTimes: number;
    dailySpill: number;
    nationalRetainer: number;
    wizardWeekly: number;
    newtonNews: number;
    averageScore: number;
  };
}

const initialState: QualityState = {
  quality: 0,
  reviews: {
    sodaCityTimes: 0,
    dailySpill: 0,
    nationalRetainer: 0,
    wizardWeekly: 0,
    newtonNews: 0,
    averageScore: 0,
  },
};

export const qualitySlice = createSlice({
  name: "quality",
  initialState,
  reducers: {
    adjustQuality: (state, action: PayloadAction<number>) => {
      state.quality += action.payload;
    },
    resetQuality: (state) => {
      return initialState;
    },
    adjustReviews: (state, action: PayloadAction<QualityState>) => {
      return action.payload;
    },
  },
});

export const { adjustQuality, resetQuality, adjustReviews } =
  qualitySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectQuality = (state: RootState) => state.quality;

export default qualitySlice.reducer;
