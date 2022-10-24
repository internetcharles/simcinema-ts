import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import {
  resetMovieInfo,
  setMovieInfo,
} from "../../Redux/Reducers/movieInfoSlice";
import { adjustQuality, resetQuality } from "../../Redux/Reducers/qualitySlice";
import { RootState } from "../../Redux/store";
import Window from "../Global/Window";
import { Option } from "./Interfaces/CreateInterface";
import { TbMovie } from "react-icons/tb";
import "./Styles/CreateMovie.scss";
import { genreRepeatCheck } from "../../Common/utils";
import GenreWarningModal from "./GenreWarningModal";

interface Props {}

const CreateMovie: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const movieInfo = useSelector((state: RootState) => state.movieInfo);
  const companyInfo = useSelector((state: RootState) => state.companyInfo);

  const [movieName, setMovieName] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Option | null>(null);
  const [movieDescription, setMovieDescription] = useState<string>("");
  const [warningVisible, setWarningVisible] = useState<boolean>(false);
  const [genreWarningModalVisible, setGenreWarningModalVisible] =
    useState<boolean>(false);
  const [genreWarningShown, setGenreWarningShown] = useState<boolean>(false);

  useEffect(() => {
    dispatch(resetMovieInfo());
    dispatch(resetBudget());
    dispatch(resetQuality());
  }, []);

  const handleGenreChange = (selectedOption: any): void => {
    setSelectedGenre(selectedOption.target);
  };

  const handleCancelPress = (): void => {
    setGenreWarningModalVisible(!genreWarningModalVisible);
  };

  const submitMovie = (): void => {
    if (movieName === "" || selectedGenre === null) {
      setWarningVisible(true);
      return;
    }
    if (
      genreRepeatCheck(companyInfo.history, selectedGenre.value) &&
      !genreWarningShown
    ) {
      console.log("GENRE REPEAT DETECTED");
      setGenreWarningModalVisible(true);
      setGenreWarningShown(true);
      return;
    } else if (
      genreRepeatCheck(companyInfo.history, selectedGenre.value) &&
      genreWarningShown
    ) {
      console.log("USER SAID FUCK IT");
      dispatch(adjustQuality(-50));
    }
    dispatch(
      setMovieInfo({
        ...movieInfo,
        title: movieName,
        genre: selectedGenre.value,
        description: movieDescription,
      }),
    );
    setTimeout(() => {
      navigate("/funding");
    }, 400);
  };

  return (
    <>
      <Window label="Create Movie" size="medium-window">
        <div className="create-movie-container">
          <div className="create-movie-title-container">
            <TbMovie size={50} />
            <div className="create-movie-title-header">New movie info:</div>
            {warningVisible && (
              <div className="create-movie-title-warning">
                Please enter a movie name and pick a genre!
              </div>
            )}
          </div>
          <div className="create-movie-title-container">
            <div className="create-movie-title-text">Title:</div>
            <input
              maxLength={30}
              className="create-movie-title-input"
              value={movieName}
              onInput={(e) =>
                setMovieName((e.target as HTMLInputElement).value)
              }
              placeholder="Star Wars"
            />
          </div>
          <div className="create-movie-flex-container">
            <div className="create-movie-bottom-container">
              <div className="create-movie-genre-header-label">Genre:</div>
              <div className="create-movie-genre-container">
                <div
                  onChange={handleGenreChange}
                  className="create-movie-genre-list"
                >
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="actionAdventure"
                    name="genre"
                  />
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="comedy"
                    name="genre"
                  />
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="drama"
                    name="genre"
                  />
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="romance"
                    name="genre"
                  />
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="horror"
                    name="genre"
                  />
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="sciFi"
                    name="genre"
                  />
                  <input
                    className="create-movie-genre-option"
                    type="radio"
                    value="animated"
                    name="genre"
                  />
                </div>
                <div>
                  <div className="create-movie-genre-label">
                    Action/Adventure
                  </div>
                  <div className="create-movie-genre-label">Comedy</div>
                  <div className="create-movie-genre-label">Drama</div>
                  <div className="create-movie-genre-label">Romance</div>
                  <div className="create-movie-genre-label">Horror</div>
                  <div className="create-movie-genre-label">Sci-Fi</div>
                  <div className="create-movie-genre-label">Animated</div>
                </div>
              </div>
            </div>
            <div>
              <div className="create-movie-description-container">
                <div className="create-movie-description-header">
                  Description (optional):
                </div>
                <textarea
                  className="create-movie-description-input"
                  value={movieDescription}
                  onInput={(e) =>
                    setMovieDescription((e.target as HTMLInputElement).value)
                  }
                  placeholder="This is a space movie."
                />
                <div className="create-movie-button-container">
                  <button
                    className="create-movie-description-button-okay"
                    onClick={submitMovie}
                  >
                    Okay
                  </button>
                  <button className="create-movie-description-button">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
      {genreWarningModalVisible && (
        <GenreWarningModal
          movieHistory={companyInfo.history}
          handleCancelPress={handleCancelPress}
          handleContinuePress={submitMovie}
        />
      )}
    </>
  );
};

export default CreateMovie;
