import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const Summary: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const navigateHome = (): void => {
    navigate("/");
  };

  return (
    <>
      <div>Summary</div>
      <div>Domestic Gross: $0 million</div>
      <div>International Gross: $0 million</div>
      <div>Total Gross: $0 million</div>
      <button onClick={navigateHome}>Return to Home</button>
    </>
  );
};

export default Summary;
