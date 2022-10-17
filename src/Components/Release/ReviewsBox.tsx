import React from "react";
import { Reviews } from "./Interfaces/ReleaseInterfaces";
import "./Styles/ReviewsBox.scss";

interface Props {
  reviews: Reviews;
}

const ReviewsBox: React.FC<Props> = ({ reviews }) => {
  return (
    <div>
      <div className="reviews-box-header">Reviews:</div>
      <div className="reviews-box-container">
        <div className="reviews-box-details-container">
          <div>Soda City Times: {reviews.sodaCityTimes}/10</div>
          <div>Daily Spill: {reviews.dailySpill}/10</div>
          <div>The National Retainer: {reviews.nationalRetainer}/10</div>
          <div>Newton News: {reviews.newtonNews}/10</div>
          <div>Wizard Weekly: {reviews.wizardWeekly}/10</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsBox;
