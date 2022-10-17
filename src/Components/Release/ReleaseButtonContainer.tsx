import React from "react";
import { FcAdvertising } from "react-icons/fc";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./Styles/ReleaseButtonContainer.scss";

interface Props {
  handleAdModalPress: () => void;
  advanceWeek: () => void;
  continueToSummary: () => void;
  theaters: number;
}

const ReleaseButtonContainer: React.FC<Props> = ({
  handleAdModalPress,
  advanceWeek,
  continueToSummary,
  theaters,
}) => {
  return (
    <div className="release-button-container-buttons">
      <div className="release-button-container-inner">
        <div
          onClick={handleAdModalPress}
          className="release-button-container-button"
        >
          <FcAdvertising className="release-button-icon" />
          <div>Advertise</div>
        </div>
        {theaters > 0 && (
          <div
            onClick={advanceWeek}
            className="release-button-container-button"
          >
            <AiOutlineCalendar className="release-button-icon" />
            <div>Pass Week</div>
          </div>
        )}
        {theaters <= 0 && (
          <div
            onClick={continueToSummary}
            className="release-button-container-button"
          >
            <MdDone className="release-button-icon" />
            <div>Summary</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReleaseButtonContainer;
