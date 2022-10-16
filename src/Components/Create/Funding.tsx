import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { setBudget, setDistributor } from "../../Redux/Reducers/budgetSlice";
import Window from "../Global/Window";
import { requestOffer, studios } from "./Data/studioData";
import { Studio } from "./Interfaces/CreateInterface";
import StudioButton from "./StudioButton";
import "./Styles/Funding.scss";

const Funding: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [studioList, setStudioList] = useState<Studio[]>([...studios]);
  const [showOfferWindow, setShowOfferWindow] = useState<boolean>(false);
  const [currentOffer, setCurrentOffer] = useState<Studio | null>(null);

  const onStudioClick = (studio: Studio): void => {
    if (!studio.offerRequested) {
      setStudioList([...requestOffer(studio)]);
    } else if (studio.offer > 0) {
      setShowOfferWindow(true);
      setCurrentOffer(studio);
    }
  };

  const acceptOffer = (): void => {
    if (currentOffer) {
      dispatch(setDistributor(currentOffer.studioName));
      dispatch(setBudget(currentOffer.offer));
    }
    navigate("/cast-select");
  };

  const rejectOffer = (): void => {
    setShowOfferWindow(false);
  };

  // TODO: Add max selections
  return (
    <Window size="large-window" label="Funding">
      <div className="funding-studio-container">
        {studioList.map((studio) => (
          <StudioButton
            key={studio.studioName}
            onStudioClick={() => onStudioClick(studio)}
            studio={studio}
          />
        ))}
      </div>
      {showOfferWindow && (
        <Window label="Offer" size="small-window">
          <div className="funding-accept-window-container">
            <div className="funding-accept-window-header">
              <div>Accept the offer?</div>
              <div className="funding-accept-window-studio">
                <div>{currentOffer?.studioName}</div>
                <div>${currentOffer?.offer} million</div>
              </div>
            </div>
            <div className="funding-accept-button-container">
              <button onClick={acceptOffer} className="funding-accept-button">
                Yes
              </button>
              <button onClick={rejectOffer} className="funding-accept-button">
                No
              </button>
            </div>
          </div>
        </Window>
      )}
    </Window>
  );
};

export default Funding;
