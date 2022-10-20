import React from "react";
import { convertGenreName } from "../../Common/utils";
import { BudgetState } from "../../Redux/Reducers/budgetSlice";
import { CompanyInfoState } from "../../Redux/Reducers/companyInfoSlice";
import { MovieInfoState } from "../../Redux/Reducers/movieInfoSlice";
import "./Styles/MovieInfoHeader.scss";

interface Props {
  movieInfo: MovieInfoState;
  budgetInfo: BudgetState;
  companyInfo: CompanyInfoState;
  currentWeek: number;
  percentDone: number;
  theaters: number;
}

const MovieInfoHeaderDetails: React.FC<Props> = ({
  movieInfo,
  budgetInfo,
  companyInfo,
  currentWeek,
  percentDone,
  theaters,
}) => {
  return (
    <div className="movie-info-header-details-baseline-container">
      <div className="movie-info-header-details-container">
        <div>
          {budgetInfo.distributor && (
            <div>Distributor: {budgetInfo.distributor}</div>
          )}
          {companyInfo.companyName && (
            <div>Produced by: {companyInfo.companyName}</div>
          )}
          {currentWeek >= 0 && <div>Weeks passed: {currentWeek}</div>}
          {percentDone >= 0 && percentDone < 100 && (
            <div>Percent done: {percentDone} percent</div>
          )}
          {percentDone >= 100 && <div>Percent done: 100 percent</div>}
          {budgetInfo.hype >= 0 && <div>Hype: {budgetInfo.hype}</div>}
          {budgetInfo.moneyRemaining >= 0 && (
            <div>Money remaining: ${budgetInfo.moneyRemaining} million</div>
          )}
          {theaters >= 0 && <div>Theaters: {theaters}</div>}
        </div>
        <div className="movie-info-header-details-second-info">
          {movieInfo.genre && (
            <div>Genre: {convertGenreName(movieInfo.genre)}</div>
          )}
          {movieInfo.leadActor && (
            <div>Lead Actor: {movieInfo.leadActor.name}</div>
          )}
          {movieInfo.leadActress && (
            <div>Lead Actress: {movieInfo.leadActress.name}</div>
          )}
          {movieInfo.composer && <div>Composer: {movieInfo.composer.name}</div>}
          {movieInfo.vfx && <div>VFX: {movieInfo.vfx.name}</div>}
          {movieInfo.audio && <div>Audio: {movieInfo.audio.name}</div>}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoHeaderDetails;
