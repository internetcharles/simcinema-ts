/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  generateInitialTheaters,
  generateNextHypeNumber,
} from "../../Common/utils";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { adjustEarnings, adjustHype } from "../../Redux/Reducers/budgetSlice";
import { addMovieToHistory } from "../../Redux/Reducers/companyInfoSlice";
import AdvertisingBox from "../Filming/AdvertisingBox";
import { generateReleaseEvent } from "../Filming/Data/eventData";
import { ReleaseEvent } from "../Filming/Interfaces/FilmingInterface";
import AdModal from "../Global/AdModal";
import FilmNotificationBox from "../Global/FilmNotificationBox";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import Window from "../Global/Window";
import { generateReviews } from "./Data/reviewData";
import ReleaseButtonContainer from "./ReleaseButtonContainer";
import ReviewsBox from "./ReviewsBox";
import ReviewsModal from "./ReviewsModal";
import "./Styles/ReleaseHome.scss";

interface Props {}

const ReleaseHome: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const qualityInfo = useAppSelector((state) => state.quality);
  const [theaters, setTheaters] = useState<number>(0);
  const [adModalOpen, setAdModalOpen] = useState<boolean>(false);
  const [reviewsModalOpen, setReviewsModalOpen] = useState<boolean>(true);
  const [earnings, setEarnings] = useState<number>(0);
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(true);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [theaterFallOff, setTheaterFallOff] = useState<number>(10);
  const reviews = generateReviews(qualityInfo.quality);
  const { hype } = budgetInfo;

  console.log(reviews);

  useEffect(() => {
    setTheaters(generateInitialTheaters(hype, qualityInfo.quality));
  }, []);

  useEffect(() => {
    if (theaters < 0) {
      setTheaters(0);
    }
  }, [theaters]);

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    setAdModalOpen(false);
    setTheaterFallOff(theaterFallOff * 1.6);
    const weekEvent: ReleaseEvent = generateReleaseEvent();
    const hypeAdjustment = hype + weekEvent.hypeDifference - 5;
    const theaterAdjustment =
      theaters - Math.floor(300 / (hype + Math.random() * 2 + 1));
    if (theaters <= 0) {
      setTheaters(0);
      setNotifications([
        ...notifications,
        "No more theaters are showing your film!",
      ]);
      return;
    }
    if (theaters > 0) {
      setEarnings(earnings + theaters * 311);
      if (hype > 0) {
        dispatch(adjustHype(hypeAdjustment));
      } else {
        dispatch(adjustHype(0));
      }
      setTheaters(theaterAdjustment);
      setNotifications([
        ...notifications,
        `${weekEvent.description} ${
          theaters - theaterAdjustment
        } theaters have dropped your film. Hype changes by ${
          hype > 0 ? hypeAdjustment - hype : 0
        }.`,
      ]);
    }
    console.log(hype);
  };

  const handleReviewPress = (): void => {
    setAdModalOpen(false);
    setReviewsModalOpen(!reviewsModalOpen);
  };

  const handleAdPress = (): void => {
    setReviewsModalOpen(false);
    setAdModalOpen(!adModalOpen);
  };

  const continueToSummary = (): void => {
    if (!reviewsModalOpen && !adModalOpen) {
      dispatch(adjustEarnings(earnings));
      dispatch(
        addMovieToHistory({
          title: movieInfo.title,
          averageScore: reviews.averageScore,
          earnings,
        }),
      );
      navigate("/summary");
    }
  };

  const handleMovieDetailsClick = (): void => {
    setShowMovieDetails(!showMovieDetails);
  };

  return (
    <Window size="large-window" label="Release">
      <MovieInfoHeader
        theaters={theaters}
        handleArrowClick={handleMovieDetailsClick}
        showMovieDetails={showMovieDetails}
        currentWeek={currentWeek}
        percentDone={-10}
      />
      <div className="release-home-ad-reviews">
        <div className="release-home-earnings">
          Earnings:{" "}
          <div className="release-home-earnings-number">${earnings}</div>
        </div>
        <AdvertisingBox halved={true} budgetInfo={budgetInfo} />
        <ReviewsBox reviews={reviews} />
      </div>
      <FilmNotificationBox
        notifications={notifications}
        expandedInfo={showMovieDetails}
      />
      <ReleaseButtonContainer
        theaters={theaters}
        handleAdModalPress={handleAdPress}
        advanceWeek={advanceWeek}
        continueToSummary={continueToSummary}
      />
      {adModalOpen && <AdModal handleDonePress={handleAdPress} />}
      {reviewsModalOpen && (
        <ReviewsModal handleButtonPress={handleReviewPress} reviews={reviews} />
      )}
    </Window>
  );
};

export default ReleaseHome;
