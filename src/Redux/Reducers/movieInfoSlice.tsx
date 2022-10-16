import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface MovieInfoState {
  title: string;
  genre: string;
  description: string;
  leadActor: string;
  leadActress: string;
  composer: string;
  vfx: string;
  audio: string;
}

const initialState: MovieInfoState = {
  title: "A",
  genre: "A",
  description: "A",
  leadActor: "A",
  leadActress: "A",
  composer: "A",
  vfx: "A",
  audio: "A",
};

export const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState,
  reducers: {
    setMovieInfo: (state, action: PayloadAction<MovieInfoState>) => {
      return action.payload;
    },
    resetMovieInfo: (state) => {
      return initialState;
    },
  },
});

export const { setMovieInfo, resetMovieInfo } = movieInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectMovieInfo = (state: RootState) => state.movieInfo;

export default movieInfoSlice.reducer;
