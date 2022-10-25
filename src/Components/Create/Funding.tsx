import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setBudget, setDistributor } from "../../Redux/Reducers/budgetSlice";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import { requestOffer, studios } from "./Data/studioData";
import { Studio } from "./Interfaces/CreateInterface";
import StudioButton from "./StudioButton";
import "./Styles/Funding.scss";

const Funding: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const companyInfo = useAppSelector((state) => state.companyInfo);

  const [studioList, setStudioList] = useState<Studio[]>([...studios]);
  const [showOfferWindow, setShowOfferWindow] = useState<boolean>(false);
  const [showProposalWindow, setShowProposalWindow] = useState<boolean>(false);
  const [studioMessage, setStudioMessage] = useState<string>("");
  const [currentOffer, setCurrentOffer] = useState<Studio | null>(null);
  const [dismissed, setDismissed] = useState<boolean>(false);

  const onStudioClick = (studio: Studio): void => {
    if (!studio.offerRequested) {
      setCurrentOffer(studio);
      setStudioList([...requestOffer(studio, companyInfo)]);
      setStudioMessage(studio.message);
      setShowProposalWindow(true);
    } else if (studio.offer > 0) {
      setShowOfferWindow(true);
      setShowProposalWindow(false);
      setCurrentOffer(studio);
    }
  };

  const acceptOffer = (): void => {
    if (currentOffer) {
      dispatch(setDistributor(currentOffer.studioName));
      dispatch(setBudget(currentOffer.offer));
    }
    setDismissed(true);
    setTimeout(() => {
      navigate("/cast-select");
    }, 500);
  };

  const handleOfferOKPress = (): void => {
    setShowProposalWindow(false);
  };

  const rejectOffer = (): void => {
    setShowOfferWindow(false);
  };

  // TODO: Add max selections
  return (
    <Window
      isAnimated={true}
      dismissed={dismissed}
      size="large-window"
      label="Funding"
    >
      <div className="funding-studio-container">
        {studioList.map((studio) => (
          <StudioButton
            key={studio.studioName}
            onStudioClick={() => onStudioClick(studio)}
            studio={studio}
          />
        ))}
      </div>
      {showProposalWindow && (
        <Window label="Proposal" size="medium-window">
          <div className="funding-proposal-window-container">
            <div className="funding-proposal-window-studio-header">
              {currentOffer?.studioName}
            </div>
            {currentOffer?.offer && currentOffer?.offer > 0 ? (
              <div className="funding-proposal-window-offer">
                ${currentOffer?.offer} million
              </div>
            ) : (
              <div className="funding-proposal-window-offer-rejected">
                REJECTED
              </div>
            )}
            <div className="funding-proposal-window-message">
              {studioMessage}
            </div>
            <div className="funding-proposal-window-button-container">
              <MiniButton
                icon=""
                label="OK"
                handleButtonPress={handleOfferOKPress}
              />
            </div>
          </div>
        </Window>
      )}
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
