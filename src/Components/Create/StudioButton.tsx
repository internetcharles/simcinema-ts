import React from "react";
import { Studio } from "./Interfaces/CreateInterface";

interface Props {
  studio: Studio;
  onStudioClick: () => void;
}

const StudioButton: React.FC<Props> = ({ studio, onStudioClick }) => {
  const { image, studioName, offerRequested, rejected, offer } = studio;
  return (
    <div onClick={onStudioClick}>
      <div>{image}</div>
      <div>{studioName}</div>
      <div>{offerRequested ? "Asked" : "Haven't Asked"}</div>
      <div>{offerRequested && rejected ? "Rejected!" : null}</div>
      <div>{offerRequested && !rejected ? `${offer} million` : null}</div>
      {!offerRequested ? <button>Ask</button> : null}
      {offerRequested && !rejected ? <button>Take Offer</button> : null}
    </div>
  );
};

export default StudioButton;
