import React from "react";
import "./Window.scss";

interface Props {
  label: string;
  children: React.ReactNode;
  size: string;
}

const Window: React.FC<Props> = ({ label, children, size }) => {
  return (
    <div className={size}>
      <div className="inner-border">
        <div className="document-bar">
          <div className="line-container">
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
          </div>
          <div className="header-title">{label}</div>
          <div className="line-container">
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
          </div>
        </div>
        <div className="inner-inner-border">{children}</div>
      </div>
    </div>
  );
};

export default Window;
