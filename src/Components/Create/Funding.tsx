import React from "react";
import { Link } from "react-router-dom";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import { requestOffer, studios } from "./Data/studioData";
import { Studio } from "./Interfaces/CreateInterface";
import StudioButton from "./StudioButton";

const Funding: React.FC = () => {
  const onStudioClick = (studio: Studio): void => {
    requestOffer(studio);
  };

  return (
    <>
      <MovieInfoHeader />
      <div>Funding</div>
      <div>
        {studios.map((studio, idx) => (
          <StudioButton
            key={studio.studioName}
            onStudioClick={() => onStudioClick(studio)}
            studio={studio}
          />
        ))}
        <Link to="/actor-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default Funding;
