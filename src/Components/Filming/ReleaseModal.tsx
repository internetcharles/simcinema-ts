import React from "react";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import "./Styles/ReleaseModal.scss";

interface Props {
  handleReleaseFilmPress: (arg0: boolean) => void;
}

const ReleaseModal: React.FC<Props> = ({ handleReleaseFilmPress }) => {
  return (
    <Window size="small-window" label="Release">
      <div className="release-modal-container">
        <div className="release-modal-header">Release Film?</div>
        <div className="release-modal-button-container">
          <MiniButton
            icon=""
            label="Yes"
            handleButtonPress={() => handleReleaseFilmPress(true)}
          />
          <MiniButton
            icon=""
            label="No"
            handleButtonPress={() => handleReleaseFilmPress(false)}
          />
        </div>
      </div>
    </Window>
  );
};

export default ReleaseModal;
