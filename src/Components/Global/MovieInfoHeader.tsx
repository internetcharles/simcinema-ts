import React from "react";
import { useAppSelector } from "../../Redux/hooks";

const MovieInfoHeader: React.FC = () => {
  const companyInfo = useAppSelector((state) => state.companyInfo);
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const budgetInfo = useAppSelector((state) => state.budgetInfo);

  return (
    <>
      <h1 className="header">{companyInfo.companyName}</h1>
      {movieInfo.title && <h2>{movieInfo.title}</h2>}
      {budgetInfo.moneyRemaining && (
        <h3>Budget: {budgetInfo.moneyRemaining} million</h3>
      )}
      {movieInfo.leadActor && <div>Lead Actor: {movieInfo.leadActor}</div>}
    </>
  );
};

export default MovieInfoHeader;
