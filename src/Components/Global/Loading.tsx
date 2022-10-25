import React from "react";
import Window from "./Window";
import "./Styles/Loading.scss";

interface Props {}

const Loading: React.FC<Props> = (props) => {
  return (
    <Window size="large-window" label="Loading">
      <div className="loading-container">
        <div className="loading-text">LOADING...</div>
      </div>
    </Window>
  );
};

export default Loading;
