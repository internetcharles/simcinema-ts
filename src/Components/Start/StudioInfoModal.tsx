import React from "react";
import { calculateStudioNet, reputationString } from "../../Common/utils";
import { useAppSelector } from "../../Redux/hooks";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import "./Styles/StudioInfoModal.scss";

interface Props {
  handleStudioInfoPress: () => void;
}

const StudioInfoModal: React.FC<Props> = ({ handleStudioInfoPress }) => {
  const companyInfo = useAppSelector((state) => state.companyInfo);
  const netEarnings = calculateStudioNet(companyInfo.history);
  return (
    <Window label="Studio Info" size="medium-window">
      <div className="studio-info-modal-container">
        <div className="studio-info-modal-company-header">
          {companyInfo.companyName}
        </div>
        <div className={"studio-info-modal-funds"}>
          Current funds: ${companyInfo.funds} million
        </div>
        <div
          className={
            netEarnings >= 0
              ? "studio-info-modal-earnings-green"
              : "studio-info-modal-earnings-red"
          }
        >
          Net Earnings: ${netEarnings}
        </div>
        <div>Films Produced: {companyInfo.history.length}</div>
        <div>
          Reputation:{" "}
          {reputationString(companyInfo.reputation, companyInfo.history)}
        </div>
        <div className="studio-info-modal-button-container">
          <MiniButton
            icon=""
            handleButtonPress={handleStudioInfoPress}
            label="OK"
          />
        </div>
      </div>
    </Window>
  );
};

export default StudioInfoModal;
