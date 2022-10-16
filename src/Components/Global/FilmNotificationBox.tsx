import React from "react";
import "./Styles/FilmNotificationBox.scss";

interface Props {
  expandedInfo: boolean;
}

const FilmNotificationBox: React.FC<Props> = ({ expandedInfo }) => {
  return (
    <div
      className={
        expandedInfo
          ? "film-notification-box-container-shrink"
          : "film-notification-box-container"
      }
    >
      <div className="film-notification-notification-box">
        <div className="film-notification-items">Notifications go here</div>
      </div>
    </div>
  );
};

export default FilmNotificationBox;
