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
import { FilmingEvent } from "./Interfaces/FilmingInterface";
import { generateFilmingEvent } from "./Data/eventData";
import "./Styles/FilmingHome.scss";
import ReadyForReleaseModal from "./ReadyForReleaseModal";
import ProgressBox from "./ProgressBox";

interface Props {}

const FilmingHome: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const qualityInfo = useAppSelector((state) => state.quality);
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [percentDone, setPercentDone] = useState<number>(0);
  const [totalPercentDone, setTotalPercentDone] = useState<number>(0);
  const [setsPropsProgress, setSetsPropsProgress] = useState<number>(0);
  const [filmingProgress, setFilmingProgress] = useState<number>(0);
  const [editingEffectsProgress, setEditingEffectsProgress] =
    useState<number>(0);
  const [composingProgress, setComposingProgress] = useState<number>(0);
  const [currentFilmingPhase, setCurrentFilmingPhase] = useState<number>(0);
  const [readyForRelease, setReadyForRelease] = useState<boolean>(false);
  const [isAdModalOpen, setIsAdModalOpen] = useState<boolean>(false);
  const [infoExpanded, setInfoExpanded] = useState(true);
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(true);
  const [showReleaseModal, setShowReleaseModal] = useState<boolean>(false);
  const [showReadyForRelease, setShowReadyForRelease] =
    useState<boolean>(false);
  const [readyForReleaseShown, setReadyForReleaseShown] =
    useState<boolean>(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const { hype, targetHype } = budgetInfo;
  const { cast } = movieInfo;

  useEffect(() => {
    console.log(movieInfo.cast);
    const initialHype = generateInitialHype(qualityInfo.quality);
    dispatch(adjustHype(initialHype));
    dispatch(adjustTargetHype(initialHype));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (setsPropsProgress >= 100 && currentFilmingPhase === 0) {
      setSetsPropsProgress(100);
      setCurrentFilmingPhase((currentFilmingPhase) => currentFilmingPhase + 1);
      setPercentDone(0);
    }
    if (filmingProgress >= 100 && currentFilmingPhase === 1) {
      setFilmingProgress(100);
      setCurrentFilmingPhase((currentFilmingPhase) => currentFilmingPhase + 1);
      setPercentDone(0);
    }
    if (editingEffectsProgress >= 100 && currentFilmingPhase === 2) {
      setEditingEffectsProgress(100);
      setCurrentFilmingPhase((currentFilmingPhase) => currentFilmingPhase + 1);
      setPercentDone(0);
    }
    if (composingProgress >= 100 && currentFilmingPhase === 3) {
      setComposingProgress(100);
      setCurrentFilmingPhase((currentFilmingPhase) => currentFilmingPhase + 1);
    }
    if (currentFilmingPhase >= 4) {
      if (!readyForReleaseShown) {
        setShowReadyForRelease(true);
      }
      setReadyForRelease(true);
      setNotifications([...notifications, `Film is ready for release!`]);
    }
    setTotalPercentDone(
      setsPropsProgress +
        filmingProgress +
        editingEffectsProgress +
        composingProgress,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentFilmingPhase,
    setsPropsProgress,
    composingProgress,
    filmingProgress,
    editingEffectsProgress,
  ]);

  const handleArrowClick = (): void => {
    setInfoExpanded(!infoExpanded);
    setShowMovieDetails(!showMovieDetails);
  };

  const phaseCheck = (percentDone: number): void => {
    if (currentFilmingPhase === 0) {
      setSetsPropsProgress(setsPropsProgress + percentDone);
    } else if (currentFilmingPhase === 1) {
      setFilmingProgress((filmingProgress) => filmingProgress + percentDone);
    } else if (currentFilmingPhase === 2) {
      setEditingEffectsProgress(
        (editingEffectsProgress) => editingEffectsProgress + percentDone,
      );
    } else if (currentFilmingPhase === 3) {
      setComposingProgress(
        (composingProgress) => composingProgress + percentDone,
      );
    }
  };

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    setIsAdModalOpen(false);
    const weekEvent: FilmingEvent = generateFilmingEvent(cast, readyForRelease);
    const percentToAdd = weekEvent.progress;
    phaseCheck(percentToAdd);
    const hypeAdjustment = generateNextHypeNumber(
      hype + weekEvent.hypeDifference,
      targetHype,
    );
    const hypeDifference = hypeAdjustment - hype;
    if (targetHype > 0) {
      dispatch(adjustTargetHype(targetHype - Math.log(currentWeek + 1)));
      dispatch(adjustHype(hypeAdjustment));
    } else if (hypeAdjustment < 0) {
      dispatch(adjustHype(0));
    } else {
      dispatch(adjustHype(0));
    }
    if (percentDone < 100) {
      setNotifications([
        ...notifications,
        `${weekEvent.description} Hype changes by ${hypeDifference}.`,
      ]);
    } else if (hype > 0 || targetHype > 0) {
      setNotifications([
        ...notifications,
        `Hype changes by ${hypeDifference}.`,
      ]);
    } else {
      setNotifications([...notifications, "Hype remains the same."]);
    }
  };

  const releaseFilm = (): void => {
    setShowReleaseModal(true);
  };

  const handleAdModalPress = (): void => {
    setIsAdModalOpen(!isAdModalOpen);
  };

  const handleReleaseModalPress = (): void => {
    setReadyForReleaseShown(true);
    setShowReadyForRelease(!showReadyForRelease);
  };

  const handleReleaseFilmPress = (answer: boolean): void => {
    answer ? navigate("/release-home") : setShowReleaseModal(false);
  };

  return (
    <Window isAnimated={true} label="Filming" size="large-window">
      <FilmReelDecoration />
      <div className="filming-home-container">
        <MovieInfoHeader
          theaters={-1}
          handleArrowClick={handleArrowClick}
          showMovieDetails={showMovieDetails}
          percentDone={totalPercentDone}
          currentWeek={currentWeek}
        />
        <div className="filming-home-ad-progress-container">
          <AdvertisingBox budgetInfo={budgetInfo} halved={true} />
          <ProgressBox
            setsPropsProgress={setsPropsProgress}
            filmingProgress={filmingProgress}
            composingProgress={composingProgress}
            editingEffectsProgress={editingEffectsProgress}
          />
        </div>
        <FilmNotificationBox
          expandedInfo={infoExpanded}
          notifications={notifications}
        />
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
        {showReadyForRelease && (
          <ReadyForReleaseModal handleButtonPress={handleReleaseModalPress} />
        )}
      </div>
    </Window>
  );
};

export default FilmingHome;
