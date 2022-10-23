import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieOption } from "../../Components/Create/Interfaces/CreateInterface";
import { RootState } from "../store";

export interface MovieInfoState {
  title: string;
  genre: string;
  description: string;
  leadActor: MovieOption;
  leadActress: MovieOption;
  composer: MovieOption;
  vfx: MovieOption;
  audio: MovieOption;
  cast: MovieOption[];
  rating: string;
}

const initialState: MovieInfoState = {
  title: "A",
  genre: "A",
  description: "A",
  leadActor: {
    name: "A",
    type: "A",
    price: 0,
    status: "A",
    portrait: "",
    description: "A",
    quality: {
      actionAdventure: 0,
      comedy: 0,
      drama: 0,
      romance: 0,
      horror: 0,
      sciFi: 0,
      animated: 0,
    },
  },
  leadActress: {
    name: "A",
    type: "A",
    price: 0,
    status: "A",
    portrait: "",
    description: "A",
    quality: {
      actionAdventure: 0,
      comedy: 0,
      drama: 0,
      romance: 0,
      horror: 0,
      sciFi: 0,
      animated: 0,
    },
  },
  composer: {
    name: "A",
    type: "A",
    price: 0,
    status: "A",
    portrait: "",
    description: "A",
    quality: {
      actionAdventure: 0,
      comedy: 0,
      drama: 0,
      romance: 0,
      horror: 0,
      sciFi: 0,
      animated: 0,
    },
  },
  vfx: {
    name: "A",
    type: "A",
    price: 0,
    status: "A",
    portrait: "",
    description: "",
    quality: {
      actionAdventure: 0,
      comedy: 0,
      drama: 0,
      romance: 0,
      horror: 0,
      sciFi: 0,
      animated: 0,
    },
  },
  audio: {
    name: "A",
    type: "A",
    price: 0,
    status: "A",
    portrait: "",
    description: "",
    quality: {
      actionAdventure: 0,
      comedy: 0,
      drama: 0,
      romance: 0,
      horror: 0,
      sciFi: 0,
      animated: 0,
    },
  },
  cast: [],
  rating: "G",
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
