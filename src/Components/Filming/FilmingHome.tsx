import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  generateNextHypeNumber,
  generateInitialHype,
} from "../../Common/utils";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { adjustHype, adjustTargetHype } from "../../Redux/Reducers/budgetSlice";
import AdModal from "../Global/AdModal";
import CompanyHeader from "../Global/CompanyHeader";
import MovieInfoHeader from "../Global/MovieInfoHeader";

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

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    if (targetHype > 0) {
      dispatch(adjustTargetHype(targetHype - Math.log(currentWeek + 1) * 2));
    }
    dispatch(adjustHype(generateNextHypeNumber(hype, targetHype)));
    if (percentDone < 100) {
      setPercentDone(percentDone + 10);
    }
  };

  const releaseFilm = (): void => {
    navigate("/release-home");
  };

  const handleAdModalPress = (): void => {
    setIsAdModalOpen(!isAdModalOpen);
  };

  return (
    <>
      <CompanyHeader />
      <MovieInfoHeader />
      <div>DEBUG (quality): {qualityInfo.quality}</div>
      <div>Hype: {hype}</div>
      <div>Hype Target: {targetHype}</div>
      <div>{`Current week: ${currentWeek}`}</div>
      <div>{`Percent done: ${percentDone}%`}</div>
      <div className="advertising-section">
        <div>Advertising</div>
        <div>TV Commercials: 0 million</div>
        <div>Movie trailers: 0 million</div>
        <div>Magazine/Newspaper ads: 0 million</div>
        <div>Posters: 0 million</div>
      </div>
      <div className="buttons">
        <button>Terminate</button>
        <button onClick={handleAdModalPress}>Advertise</button>
        <button onClick={advanceWeek}>Pass Week</button>
        <button>Content</button>
        {readyForRelease && <button onClick={releaseFilm}>Release</button>}
      </div>
      {isAdModalOpen && <AdModal />}
    </>
  );
};

export default FilmingHome;
