import React from "react";
import { convertGenreName, convertToMillions } from "../../Common/utils";
import { Movie } from "../Create/Interfaces/CreateInterface";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import "./Styles/MovieInfoModal.scss";

interface Props {
  movieInfo: Movie | null;
  handleOKPress: () => void;
}

const MovieInfoModal: React.FC<Props> = ({ movieInfo, handleOKPress }) => {
  console.log(movieInfo);
  const earningsInMillions = movieInfo?.earnings
    ? convertToMillions(movieInfo.earnings)
    : null;
  const earningsClass = (): string => {
    if (movieInfo?.earnings && earningsInMillions) {
      if (earningsInMillions > movieInfo.budget) {
        return "movie-info-earnings-positive";
      } else {
        return "movie-info-earnings-negative";
      }
    } else {
      return "";
    }
  };
  return (
    <Window label="Movie Details" size="medium-window">
      <div className="movie-info-container">
        <div className="movie-info-title">{movieInfo?.title}</div>
        <div className="movie-info-budget">
          Budget: ${movieInfo?.budget} million
        </div>
        <div className={earningsClass()}>
          Box Office: ${earningsInMillions} million
        </div>
        <div className="movie-info-secondary-info">
          Genre: {movieInfo?.genre ? convertGenreName(movieInfo?.genre) : null}
        </div>
        <div className="movie-info-secondary-info">
          Average Score: {movieInfo?.averageScore}
        </div>
        <div className="movie-info-option-outer-container">
          <div className="movie-info-option-inner-container">
            <div className="movie-info-option">
              Director: {movieInfo?.cast[0].name}
            </div>
            <div className="movie-info-option">
              Lead Actor: {movieInfo?.cast[1].name}
            </div>
            <div className="movie-info-option">
              Lead Actress: {movieInfo?.cast[2].name}
            </div>
          </div>
          <div className="movie-info-option-inner-container">
            <div className="movie-info-option">
              Composer: {movieInfo?.cast[3].name}
            </div>
            <div className="movie-info-option">
              VFX: {movieInfo?.cast[4].name}
            </div>
            <div className="movie-info-option">
              SFX: {movieInfo?.cast[5].name}
            </div>
          </div>
        </div>
        <MiniButton label="OK" handleButtonPress={handleOKPress} icon="" />
      </div>
    </Window>
  );
};

export default MovieInfoModal;
