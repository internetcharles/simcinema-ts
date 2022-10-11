import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BudgetState {
  budget: number;
  moneyRemaining: number;
}

const initialState: BudgetState = {
  budget: 0,
  moneyRemaining: 0,
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
  },
});

export const { setBudget, adjustMoneyRemaining } = budgetSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectBudget = (state: RootState) => state.budgetInfo;

export default budgetSlice.reducer;
