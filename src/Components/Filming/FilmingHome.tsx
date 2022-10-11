import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { adjustHype } from "../../Redux/Reducers/budgetSlice";
import AdModal from "../Global/AdModal";
import CompanyHeader from "../Global/CompanyHeader";
import MovieInfoHeader from "../Global/MovieInfoHeader";

interface Props {}

const FilmingHome: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [percentDone, setPercentDone] = useState<number>(0);
  const [readyForRelease, setReadyForRelease] = useState<boolean>(false);
  const [isAdModalOpen, setIsAdModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (percentDone >= 100) {
      setPercentDone(100);
      setReadyForRelease(true);
    }
  }, [percentDone]);

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    if (budgetInfo.hype > 0) {
      dispatch(adjustHype(-1));
    }
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
      <div>Hype: {budgetInfo.hype}</div>
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
