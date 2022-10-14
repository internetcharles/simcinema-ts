import React from "react";
import MiniButton from "../Global/MiniButton";
import { MovieOption } from "./Interfaces/CreateInterface";
import "./Styles/OptionButton.scss";

interface Props {
  option: MovieOption;
  onOptionClick: () => void;
}

const OptionButton: React.FC<Props> = ({ option, onOptionClick }) => {
  const { name, portrait, status, price } = option;
  return (
    <div className="option-button-box">
      <div className="option-button-container" onClick={onOptionClick}>
        <div className="option-button-title-container">
          <img className="option-button-image" src={portrait} alt={name} />
        </div>
      </div>
      <div className="option-button-bottom-outline">
        <div className="option-button-bottom-container">
          <div className="option-button-option-name">{name}</div>
          <div className="option-button-option-status">{status}</div>
          <div className="option-button-option-price">${price} million</div>
          <MiniButton
            icon={""}
            handleButtonPress={onOptionClick}
            label="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default OptionButton;
