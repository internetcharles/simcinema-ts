import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface QualityState {
  quality: number;
}

const initialState: QualityState = {
  quality: 0,
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
  },
});

export const { adjustQuality, resetQuality } = qualitySlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectQuality = (state: RootState) => state.quality;

export default qualitySlice.reducer;
