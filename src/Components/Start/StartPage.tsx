import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";

const StartPage: React.FC = (props) => {
  const navigate = useNavigate();
  const companyInfo = useAppSelector((state) => state.companyInfo);
  console.log(companyInfo);

  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  return (
    <div>
      {companyInfo.companyName && (
        <>
          <div>{companyInfo.companyName}</div>
          <div>{companyInfo.playerName}</div>
        </>
      )}
      <button onClick={() => setShowHistoryModal(!showHistoryModal)}>
        History
      </button>
      <button onClick={() => navigate("/math")}>DEBUG MATH</button>
      <Link to="/create-company">Create New Studio</Link>
      {showHistoryModal ? (
        <div>
          {companyInfo.history.map((movie) => (
            <>
              <div>{movie.title}</div>
              <div>Average Score: {movie.averageScore}</div>
              <div>Gross Earnings: ${movie.earnings}</div>
            </>
          ))}
        </div>
      ) : (
        <div>Your future movies will be summarized here!</div>
      )}
    </div>
  );
};

export default StartPage;
