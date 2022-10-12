import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../Components/Create/Interfaces/CreateInterface";
import { RootState } from "../store";

export interface CompanyInfoState {
  playerName: string;
  companyName: string;
  history: Movie[];
}

const initialState: CompanyInfoState = {
  playerName: "",
  companyName: "",
  history: [],
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
  },
});

export const { setCompanyInfo, resetCompanyInfo, addMovieToHistory } =
  companyInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectCompanyInfo = (state: RootState) => state.companyInfo;

export default companyInfoSlice.reducer;
