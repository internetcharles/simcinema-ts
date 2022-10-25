import React from "react";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import { MovieOption } from "./Interfaces/CreateInterface";
import "./Styles/OptionDescription.scss";

interface Props {
  option: MovieOption | null;
  handleDescriptionPress: () => void;
}

const OptionDescription: React.FC<Props> = ({
  option,
  handleDescriptionPress,
}) => {
  return (
    <Window label="Description" size="medium-window">
      <div className="option-description-container">
        <div className="option-description-header">{option?.name}</div>
        <img
          className="option-description-image"
          src={option?.portrait}
          alt={option?.name}
        />
        <div className="option-description-description">
          {option?.description}
        </div>
        <MiniButton
          label="OK"
          handleButtonPress={handleDescriptionPress}
          icon=""
        />
      </div>
    </Window>
  );
};

export default OptionDescription;
