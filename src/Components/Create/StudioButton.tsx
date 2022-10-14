import React from "react";
import MiniButton from "../Global/MiniButton";
import { Studio } from "./Interfaces/CreateInterface";
import "./Styles/StudioButton.scss";

interface Props {
  studio: Studio;
  onStudioClick: () => void;
}

const StudioButton: React.FC<Props> = ({ studio, onStudioClick }) => {
  const { image, studioName, offerRequested, rejected, offer } = studio;
  const borderClass = (): string => {
    if (!offerRequested) {
      return "studio-button-container";
    } else if (rejected) {
      return "studio-button-container-rejected";
    } else {
      return "studio-button-container-accepted";
    }
  };
  return (
    <div className="studio-button-box">
      <div className={borderClass()} onClick={onStudioClick}>
        <div className="studio-button-title-container">
          <img className="studio-button-image" src={image} alt={studioName} />
        </div>
      </div>
      <div className="studio-button-bottom-outline">
        <div className="studio-button-bottom-container">
          <div className="studio-button-studio-name">{studioName}</div>
          <div className="studio-button-studio-ask">
            {offerRequested ? "Asked" : "Haven't Asked"}
          </div>
          <div className="studio-button-studio-ask">
            {offerRequested && rejected ? "Rejected!" : null}
          </div>
          <div className="studio-button-studio-offer">
            {offerRequested && !rejected ? `${offer} million` : null}
          </div>
          {offerRequested && !rejected ? (
            <button onClick={onStudioClick} className="studio-button-take">
              Take Offer
            </button>
          ) : null}
          {!offerRequested ? (
            <MiniButton
              icon={""}
              handleButtonPress={onStudioClick}
              label="Ask"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StudioButton;
