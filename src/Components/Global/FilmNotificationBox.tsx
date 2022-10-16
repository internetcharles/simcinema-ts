import React from "react";
import "./Styles/FilmNotificationBox.scss";

interface Props {
  expandedInfo: boolean;
  notifications: string[];
}

const FilmNotificationBox: React.FC<Props> = ({
  expandedInfo,
  notifications,
}) => {
  return (
    <div
      className={
        expandedInfo
          ? "film-notification-box-container-shrink"
          : "film-notification-box-container"
      }
    >
      <div className="film-notification-notification-box">
        <div className="film-notification-items">
          {notifications.map((notification, idx) => {
            return (
              <div key={notification + idx.toString()}>{notification}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilmNotificationBox;
