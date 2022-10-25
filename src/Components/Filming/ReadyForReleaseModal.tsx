import React from "react";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import "./Styles/ReadyForReleaseModal.scss";

interface Props {
  handleButtonPress: () => void;
}

const ReadyForReleaseModal: React.FC<Props> = ({ handleButtonPress }) => {
  return (
    <Window label="Release" size="small-window">
      <div className="ready-for-release-modal-container">
        <div className="ready-for-release-modal-text">
          Film is ready for release!
        </div>
        <MiniButton
          label="OK"
          icon={""}
          handleButtonPress={handleButtonPress}
        />
      </div>
    </Window>
  );
};

export default ReadyForReleaseModal;
