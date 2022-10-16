import React from "react";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import { Reviews } from "./Interfaces/ReleaseInterfaces";
import "./Styles/ReviewsModal.scss";

interface Props {
  reviews: Reviews;
  handleButtonPress: () => void;
}

const ReviewsModal: React.FC<Props> = ({ reviews, handleButtonPress }) => {
  return (
    <Window label="Reviews" size="medium-window">
      <div className="reviews-modal-container">
        <div className="reviews-modal-review-outer-container">
          <div className="reviews-modal-review-container">
            <div>Soda City Times: {reviews.sodaCityTimes}/10</div>
            <div>Daily Spill: {reviews.dailySpill}/10</div>
            <div>The National Retainer: {reviews.nationalRetainer}/10</div>
            <div>Newton News: {reviews.newtonNews}/10</div>
            <div>Wizard Weekly: {reviews.wizardWeekly}/10</div>
            <div className="reviews-modal-average-score">
              Average Score: {reviews.averageScore}/10
            </div>
          </div>
          <div className="reviews-modal-button-container">
            <MiniButton
              icon=""
              label="OK"
              handleButtonPress={handleButtonPress}
            />
          </div>
        </div>
      </div>
    </Window>
  );
};

export default ReviewsModal;
