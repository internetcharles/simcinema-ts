import React, { useRef, useEffect } from "react";
import "./Styles/FilmNotificationBox.scss";

interface Props {
  expandedInfo: boolean;
  notifications: string[];
}

const FilmNotificationBox: React.FC<Props> = ({
  expandedInfo,
  notifications,
}) => {
  const notificationsEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    notificationsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [notifications]);

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
          <div ref={notificationsEndRef} />
        </div>
      </div>
    </div>
  );
};

export default FilmNotificationBox;
