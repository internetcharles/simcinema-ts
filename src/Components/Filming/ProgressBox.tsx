import React from "react";
import "./Styles/ProgressBox.scss";

interface Props {
  setsPropsProgress: number;
  composingProgress: number;
  filmingProgress: number;
  editingEffectsProgress: number;
}

const ProgressBox: React.FC<Props> = ({
  setsPropsProgress,
  composingProgress,
  filmingProgress,
  editingEffectsProgress,
}) => {
  return (
    <div className={"progress-box-container"}>
      <div className="progress-box-header">Filming Progress:</div>
      <div className="progress-box-details-container">
        <div>Sets and Props: {setsPropsProgress} percent </div>
        <div>Filming: {filmingProgress} percent</div>
        <div>Editing and Effects: {editingEffectsProgress} percent</div>
        <div>Composing: {composingProgress} percent</div>
      </div>
    </div>
  );
};

export default ProgressBox;
