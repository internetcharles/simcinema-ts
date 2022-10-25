/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  clamp,
  generateInitialTheaters,
  generateNextHypeNumber,
  reputationCalc,
} from "../../Common/utils";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  adjustEarnings,
  adjustHype,
  adjustTargetHype,
} from "../../Redux/Reducers/budgetSlice";
import {
  addMovieToHistory,
  adjustReputation,
} from "../../Redux/Reducers/companyInfoSlice";
import AdvertisingBox from "../Filming/AdvertisingBox";
import { generateReleaseEvent } from "../Filming/Data/eventData";
import { ReleaseEvent } from "../Filming/Interfaces/FilmingInterface";
import AdModal from "../Global/AdModal";
import FilmNotificationBox from "../Global/FilmNotificationBox";
import FilmReelDecoration from "../Global/FilmReelDecoration";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import Window from "../Global/Window";
import { generateReviews } from "./Data/reviewData";
import { Reviews } from "./Interfaces/ReleaseInterfaces";
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
  const [theaterFallOff, setTheaterFallOff] = useState<number>(0);
  const [reviews, setReviews] = useState<Reviews>({
    sodaCityTimes: 0,
    dailySpill: 0,
    nationalRetainer: 0,
    wizardWeekly: 0,
    newtonNews: 0,
    averageScore: 0,
  });
  const { hype, targetHype } = budgetInfo;
  const { quality } = qualityInfo;

  useEffect(() => {
    setNotifications([]);
    setTheaters(generateInitialTheaters(hype, qualityInfo.quality));
    setReviews(generateReviews(quality));
  }, []);

  useEffect(() => {
    if (theaters < 0) {
      setTheaters(0);
    }
  }, [theaters]);

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    setAdModalOpen(false);
    setTheaterFallOff((theaterFallOff) =>
      clamp(
        theaterFallOff +
          (350 - clamp(quality, 0, 346)) -
          hype +
          Math.random() * 5,
        0,
        10000,
      ),
    );
    console.log(theaterFallOff);
    const weekEvent: ReleaseEvent = generateReleaseEvent();
    const hypeAdjustment = generateNextHypeNumber(
      hype + weekEvent.hypeDifference,
      targetHype - 1,
    );
    const theaterAdjustment =
      hype > 0
        ? theaters - Math.floor(theaterFallOff)
        : theaters - Math.floor(theaterFallOff);
    if (theaters <= 0) {
      setTheaters(0);
      setNotifications([
        ...notifications,
        "No more theaters are showing your film!",
      ]);
      return;
    }
    if (theaters > 0) {
      setEarnings(earnings + theaters * 703);
      if (targetHype > 0) {
        dispatch(adjustTargetHype(targetHype - Math.log(currentWeek + 1)));
        dispatch(adjustHype(hypeAdjustment));
      } else if (hypeAdjustment < 0) {
        dispatch(adjustHype(0));
      } else {
        dispatch(adjustHype(0));
      }
      if (theaterAdjustment > theaters) {
        setNotifications([
          ...notifications,
          `${
            weekEvent.description
          } No theaters have dropped your film. Hype changes by ${
            hype > 0 ? hypeAdjustment - hype : 0
          }.`,
        ]);
        setTheaters(theaters);
      } else {
        setNotifications([
          ...notifications,
          `${weekEvent.description} ${
            theaters - theaterAdjustment
          } theaters have dropped your film. Hype changes by ${
            hype > 0 ? hypeAdjustment - hype : 0
          }.`,
        ]);
        setTheaters(theaterAdjustment);
      }
    }
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
          budget: budgetInfo.budget,
          earnings,
          cast: movieInfo.cast,
          genre: movieInfo.genre,
        }),
      );
      dispatch(adjustReputation(reputationCalc(budgetInfo.budget, earnings)));
      navigate("/summary");
    }
  };

  const handleMovieDetailsClick = (): void => {
    setShowMovieDetails(!showMovieDetails);
  };

  return (
    <Window size="large-window" label="Release">
      <FilmReelDecoration />
      <div className="release-home-container">
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
          <ReviewsModal
            handleButtonPress={handleReviewPress}
            reviews={reviews}
          />
        )}
      </div>
    </Window>
  );
};

export default ReleaseHome;
