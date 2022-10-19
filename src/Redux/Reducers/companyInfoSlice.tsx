import { User } from "@firebase/auth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../Components/Create/Interfaces/CreateInterface";
import { getCompany } from "../../firebase";
import { RootState } from "../store";

export interface CompanyInfoState {
  requestInProgress: boolean;
  playerName: string;
  companyName: string;
  history: Movie[];
  reputation: number;
  funds: number;
}

const initialState: CompanyInfoState = {
  requestInProgress: false,
  playerName: "",
  companyName: "",
  history: [],
  reputation: 0,
  funds: 0,
};

export const fetchCompany = createAsyncThunk(
  "companyInfo",
  async (user: User) => {
    return await getCompany(user).catch((error) => console.log(error));
  },
);

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
  extraReducers: {
    [fetchCompany.pending.type]: (state, action) => {
      return { ...initialState, requestInProgress: true };
    },
    [fetchCompany.fulfilled.type]: (state, action) => {
      return action.payload;
    },
    [fetchCompany.rejected.type]: (state, action) => {
      return initialState;
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
