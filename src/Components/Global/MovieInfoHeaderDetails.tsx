import React from "react";
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
}

const MovieInfoHeaderDetails: React.FC<Props> = ({
  movieInfo,
  budgetInfo,
  companyInfo,
  currentWeek,
  percentDone,
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
          {currentWeek >= 0 && <div>Weeks filming: {currentWeek}</div>}
          {percentDone >= 0 && <div>Percent done: {percentDone} percent</div>}
          {budgetInfo.hype >= 0 && <div>Hype: {budgetInfo.hype}</div>}
          {budgetInfo.moneyRemaining >= 0 && (
            <div>Money remaining: ${budgetInfo.moneyRemaining} million</div>
          )}
        </div>
        <div className="movie-info-header-details-second-info">
          {movieInfo.genre && <div>Genre: {movieInfo.genre}</div>}
          {movieInfo.leadActor && <div>Lead Actor: {movieInfo.leadActor}</div>}
          {movieInfo.leadActress && (
            <div>Lead Actress: {movieInfo.leadActress}</div>
          )}
          {movieInfo.composer && <div>Composer: {movieInfo.composer}</div>}
          {movieInfo.vfx && <div>VFX: {movieInfo.vfx}</div>}
          {movieInfo.audio && <div>Audio: {movieInfo.audio}</div>}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoHeaderDetails;
