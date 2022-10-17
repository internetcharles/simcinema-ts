import React from "react";
import { useSpring, animated } from "react-spring";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import { Reviews } from "./Interfaces/ReleaseInterfaces";
import "./Styles/ReviewsModal.scss";

interface Props {
  reviews: Reviews;
  handleButtonPress: () => void;
}

const ReviewsModal: React.FC<Props> = ({ reviews, handleButtonPress }) => {
  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 3000 },
    delay: 800,
  });
  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 3000 },
    delay: 1600,
  });
  const props3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 3000 },
    delay: 2400,
  });
  const props4 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 3000 },
    delay: 3200,
  });
  const props5 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 3000 },
    delay: 4000,
  });
  const props6 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 2000 },
    delay: 4800,
  });

  return (
    <Window label="Reviews" size="medium-window">
      <div className="reviews-modal-container">
        <div className="reviews-modal-review-outer-container">
          <div className="reviews-modal-review-container">
            <animated.div style={props1}>
              Soda City Times: {reviews.sodaCityTimes}/10
            </animated.div>
            <animated.div style={props2}>
              Daily Spill: {reviews.dailySpill}/10
            </animated.div>
            <animated.div style={props3}>
              The National Retainer: {reviews.nationalRetainer}/10
            </animated.div>
            <animated.div style={props4}>
              Newton News: {reviews.newtonNews}/10
            </animated.div>
            <animated.div style={props5}>
              Wizard Weekly: {reviews.wizardWeekly}/10
            </animated.div>
            <animated.div
              style={props6}
              className="reviews-modal-average-score"
            >
              Average Score: {reviews.averageScore}/10
            </animated.div>
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
