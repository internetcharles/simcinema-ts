import React from "react";
import { convertGenreName } from "../../Common/utils";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import { Movie } from "./Interfaces/CreateInterface";
import "./Styles/GenreWarningModal.scss";

interface Props {
  handleCancelPress: () => void;
  handleContinuePress: () => void;
  movieHistory: Movie[];
}

const GenreWarningModal: React.FC<Props> = ({
  handleCancelPress,
  handleContinuePress,
  movieHistory,
}) => {
  const lastThreeMovies = movieHistory.slice(
    movieHistory.length - 3,
    movieHistory.length,
  );
  return (
    <Window label="Warning" size="small-window">
      <div className="genre-warning-modal-container">
        <div className="genre-warning-modal-text">
          You&apos;ve made a film with this genre recently! Your audience might
          have less interest if you continue. Are you sure?
        </div>
        <div className="genre-warning-modal-genre-container">
          <div className="genre-warning-modal-genre-container-text-header">
            Your last three movie genres:
          </div>
          {lastThreeMovies.map((movie, idx) => (
            <div className="genre-warning-modal-genre-container-text" key={idx}>
              {convertGenreName(movie.genre)}
            </div>
          ))}
        </div>
        <div className="genre-warning-modal-genre-button-container">
          <MiniButton
            icon=""
            label="Continue"
            handleButtonPress={handleContinuePress}
          />
          <MiniButton
            icon=""
            label="Cancel"
            handleButtonPress={handleCancelPress}
          />
        </div>
      </div>
    </Window>
  );
};

export default GenreWarningModal;
