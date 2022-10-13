import React from "react";
import { useAppSelector } from "../../Redux/hooks";

const CompanyHeader: React.FC = () => {
  const companyInfo = useAppSelector((state) => state.companyInfo);

  return (
    <>
      <h1 className="header">Studio: {companyInfo.companyName}</h1>
      <h2>Executive: {companyInfo.playerName}</h2>
    </>
  );
};

export default CompanyHeader;
