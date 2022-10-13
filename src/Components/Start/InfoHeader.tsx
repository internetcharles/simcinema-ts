import React from "react";
import "./Styles/InfoHeader.scss";

interface Props {
  companyName?: string;
  playerName?: string;
}

const InfoHeader: React.FC<Props> = ({ companyName, playerName }) => {
  return (
    <div className="info-header-container">
      <div className="film-reel-background" />
      <div className="info-container">
        <div className="info">
          <div>Studio: {companyName !== "" ? companyName : ""}</div>
          <div>Executive: {playerName !== "" ? playerName : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
