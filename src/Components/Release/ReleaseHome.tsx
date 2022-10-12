/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import AdModal from "../Global/AdModal";

interface Props {}

const ReleaseHome: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const [theaters, setTheaters] = useState<number>(0);
  const [adModalOpen, setAdModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setTheaters(budgetInfo.hype * 1000);
  }, []);

  useEffect(() => {
    if (theaters < 0) {
      setTheaters(0);
    }
  }, [theaters]);

  const advanceWeek = (): void => {
    if (theaters <= 10) {
      setTheaters(0);
      return;
    }
    if (theaters > 0) {
      setTheaters(theaters - 1000);
    }
  };

  const continueToSummary = (): void => {
    navigate("/summary");
  };

  return (
    <>
      <div>Film Name</div>
      <div>Theaters Remaining: {theaters}</div>
      <div className="buttons">
        <button onClick={() => setAdModalOpen(true)}>Advertise</button>
        {theaters > 0 && <button onClick={advanceWeek}>Pass Week</button>}
        {theaters === 0 && <button onClick={continueToSummary}>Summary</button>}
      </div>
      {adModalOpen && <AdModal />}
    </>
  );
};

export default ReleaseHome;
