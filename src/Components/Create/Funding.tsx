import React from "react";
import { Link } from "react-router-dom";
import { studios } from "./Data/studioData";
import StudioButton from "./StudioButton";

const Funding: React.FC = () => {
  const onStudioClick = (): void => console.log("Clicked");
  return (
    <>
      <div>Funding</div>
      <div>
        {studios.map((studio) => (
          <StudioButton
            key={studio.studioName}
            onStudioClick={onStudioClick}
            studio={studio}
          />
        ))}
        <Link to="/actor-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default Funding;
