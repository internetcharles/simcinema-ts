import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri";
import MovieInfoHeaderDetails from "./MovieInfoHeaderDetails";
import "./Styles/MovieInfoHeader.scss";

interface Props {
  currentWeek: number;
  percentDone: number;
  showMovieDetails: boolean;
  handleArrowClick: () => void;
}

const MovieInfoHeader: React.FC<Props> = ({
  currentWeek,
  percentDone,
  showMovieDetails,
  handleArrowClick,
}) => {
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const companyInfo = useAppSelector((state) => state.companyInfo);

  return (
    <div>
      <div className="movie-info-header-container">
        {movieInfo.title && (
          <div className="movie-info-header-movie-title-container">
            {showMovieDetails ? (
              <RiArrowDropDownFill
                onClick={handleArrowClick}
                size={50}
                color="darkblue"
              />
            ) : (
              <RiArrowDropRightFill
                color="darkblue"
                size={50}
                onClick={handleArrowClick}
              />
            )}
            <div className="movie-info-header-movie-title">
              {movieInfo.title}
            </div>
          </div>
        )}
        <div className="movie-info-header-details-outer-container">
          {showMovieDetails && (
            <MovieInfoHeaderDetails
              companyInfo={companyInfo}
              budgetInfo={budgetInfo}
              movieInfo={movieInfo}
              currentWeek={currentWeek}
              percentDone={percentDone}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoHeader;
