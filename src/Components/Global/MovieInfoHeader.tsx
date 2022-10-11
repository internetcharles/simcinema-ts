import React from "react";
import { useAppSelector } from "../../Redux/hooks";

const MovieInfoHeader: React.FC = () => {
  const companyInfo = useAppSelector((state) => state.companyInfo);
  const movieInfo = useAppSelector((state) => state.movieInfo);

  return (
    <>
      <h1 className="header">{companyInfo.companyName}</h1>
      {movieInfo.title ? <h2>{movieInfo.title}</h2> : null}
    </>
  );
};

export default MovieInfoHeader;
