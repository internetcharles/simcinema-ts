import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  generateNextHypeNumber,
  generateInitialHype,
} from "../../Common/utils";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { adjustHype, adjustTargetHype } from "../../Redux/Reducers/budgetSlice";
import AdModal from "../Global/AdModal";
import ButtonContainer from "./FilmingButtonContainer";
import FilmNotificationBox from "../Global/FilmNotificationBox";
import FilmReelDecoration from "../Global/FilmReelDecoration";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import Window from "../Global/Window";
import AdvertisingBox from "./AdvertisingBox";
import ReleaseModal from "./ReleaseModal";

interface Props {}

const FilmingHome: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const qualityInfo = useAppSelector((state) => state.quality);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [percentDone, setPercentDone] = useState<number>(0);
  const [readyForRelease, setReadyForRelease] = useState<boolean>(false);
  const [isAdModalOpen, setIsAdModalOpen] = useState<boolean>(false);
  const [infoExpanded, setInfoExpanded] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(false);
  const [showReleaseModal, setShowReleaseModal] = useState<boolean>(false);
  const { hype, targetHype } = budgetInfo;

  useEffect(() => {
    const initialHype = generateInitialHype(qualityInfo.quality);
    dispatch(adjustHype(initialHype));
    dispatch(adjustTargetHype(initialHype));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (percentDone >= 100) {
      setPercentDone(100);
      setReadyForRelease(true);
    }
  }, [percentDone]);

  const handleArrowClick = (): void => {
    setInfoExpanded(!infoExpanded);
    setShowMovieDetails(!showMovieDetails);
  };

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    setIsAdModalOpen(false);
    if (targetHype > 0) {
      dispatch(adjustTargetHype(targetHype - Math.log(currentWeek + 1)));
    }
    dispatch(adjustHype(generateNextHypeNumber(hype, targetHype)));
    if (percentDone < 100) {
      setPercentDone(percentDone + 10);
    }
  };

  const releaseFilm = (): void => {
    setShowReleaseModal(true);
  };

  const handleAdModalPress = (): void => {
    setIsAdModalOpen(!isAdModalOpen);
  };

  const handleReleaseFilmPress = (answer: boolean): void => {
    answer ? navigate("/release-home") : setShowReleaseModal(false);
  };

  return (
    <Window label="Filming" size="large-window">
      <FilmReelDecoration />
      <MovieInfoHeader
        handleArrowClick={handleArrowClick}
        showMovieDetails={showMovieDetails}
        percentDone={percentDone}
        currentWeek={currentWeek}
      />
      <AdvertisingBox budgetInfo={budgetInfo} />
      <FilmNotificationBox expandedInfo={infoExpanded} />
      <ButtonContainer
        readyForRelease={readyForRelease}
        advanceWeek={advanceWeek}
        handleAdModalPress={handleAdModalPress}
        releaseFilm={releaseFilm}
      />
      {isAdModalOpen && (
        <AdModal handleDonePress={() => handleAdModalPress()} />
      )}
      {showReleaseModal && (
        <ReleaseModal handleReleaseFilmPress={handleReleaseFilmPress} />
      )}
    </Window>
  );
};

export default FilmingHome;
