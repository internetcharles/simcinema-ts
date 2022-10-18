import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../Components/Create/Interfaces/CreateInterface";
import { RootState } from "../store";

export interface CompanyInfoState {
  playerName: string;
  companyName: string;
  history: Movie[];
  reputation: number;
  funds: number;
}

const initialState: CompanyInfoState = {
  playerName: "",
  companyName: "",
  history: [],
  reputation: 0,
  funds: 0,
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
    addMovieToHistory: (state, action: PayloadAction<Movie>) => {
      state.history.push(action.payload);
    },
    adjustReputation: (state, action: PayloadAction<number>) => {
      state.reputation += action.payload;
    },
    adjustFunds: (state, action: PayloadAction<number>) => {
      state.funds += action.payload;
    },
  },
});

export const {
  setCompanyInfo,
  resetCompanyInfo,
  addMovieToHistory,
  adjustReputation,
  adjustFunds,
} = companyInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectCompanyInfo = (state: RootState) => state.companyInfo;

export default companyInfoSlice.reducer;
