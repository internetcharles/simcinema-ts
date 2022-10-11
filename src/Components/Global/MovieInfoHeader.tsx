import React from "react";
import { useAppSelector } from "../../Redux/hooks";

const MovieInfoHeader: React.FC = () => {
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const budgetInfo = useAppSelector((state) => state.budgetInfo);

  return (
    <>
      {movieInfo.title && <h2>{movieInfo.title}</h2>}
      {budgetInfo.budget > 0 && (
        <h3>Budget: {budgetInfo.moneyRemaining} million</h3>
      )}
      {movieInfo.leadActor && <div>Lead Actor: {movieInfo.leadActor}</div>}
      {movieInfo.leadActress && (
        <div>Lead Actress: {movieInfo.leadActress}</div>
      )}
      {movieInfo.composer && <div>Composer: {movieInfo.composer}</div>}
    </>
  );
};

export default MovieInfoHeader;
