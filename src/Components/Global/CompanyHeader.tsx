import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import "./Styles/CompanyHeader.scss";

const CompanyHeader: React.FC = () => {
  const companyInfo = useAppSelector((state) => state.companyInfo);

  return (
    <div className="company-header-container">
      <div className="header">Studio: {companyInfo.companyName}</div>
      <div>Executive: {companyInfo.playerName}</div>
    </div>
  );
};

export default CompanyHeader;
