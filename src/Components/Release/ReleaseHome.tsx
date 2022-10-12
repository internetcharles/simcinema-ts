/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { adjustReviews } from "../../Redux/Reducers/qualitySlice";
import AdModal from "../Global/AdModal";
import { generateReviews } from "./Data/reviewData";

interface Props {}

const ReleaseHome: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const qualityInfo = useAppSelector((state) => state.quality);
  const [theaters, setTheaters] = useState<number>(0);
  const [adModalOpen, setAdModalOpen] = useState<boolean>(false);
  const reviews = generateReviews(qualityInfo.quality);

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
      <div>Soda City Times: {reviews.sodaCityTimes}/10</div>
      <div>The National Retainer: {reviews.nationalRetainer}/10</div>
      <div>Newton News: {reviews.newtonNews}/10</div>
      <div>Daily Spill: {reviews.dailySpill}/10</div>
      <div>Wizard Weekly: {reviews.wizardWeekly}/10</div>
      {adModalOpen && <AdModal />}
    </>
  );
};

export default ReleaseHome;
