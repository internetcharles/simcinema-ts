import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CompanyInfoState {
  playerName: string;
  companyName: string;
}

const initialState: CompanyInfoState = {
  playerName: "",
  companyName: "",
};

export const companyInfoSlice = createSlice({
  name: "companyInfo",
  initialState,
  reducers: {
    setCompanyInfo: (state, action: PayloadAction<CompanyInfoState>) => {
      return action.payload;
    },
    resetCompanyInfo: (state) => {
      return initialState;
    },
  },
});

export const { setCompanyInfo, resetCompanyInfo } = companyInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectCompanyInfo = (state: RootState) => state.companyInfo;

export default companyInfoSlice.reducer;
