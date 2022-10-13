import React from "react";
import "./Styles/MiniButton.scss";

interface Props {
  icon: any;
  label: string;
  handleButtonPress: () => void;
}

const MiniButton: React.FC<Props> = ({ icon, label, handleButtonPress }) => {
  return (
    <div onClick={handleButtonPress} className="mini-button-container">
      <div className="mini-button-icon">{icon}</div>
      <div className="mini-button-label">{label}</div>
    </div>
  );
};

export default MiniButton;
