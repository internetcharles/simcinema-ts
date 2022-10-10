import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const FilmingHome: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [percentDone, setPercentDone] = useState<number>(0);
  const [readyForRelease, setReadyForRelease] = useState<boolean>(false);

  useEffect(() => {
    if (percentDone >= 100) {
      setPercentDone(100);
      setReadyForRelease(true);
    }
  }, [percentDone]);

  const advanceWeek = (): void => {
    setCurrentWeek(currentWeek + 1);
    if (percentDone < 100) {
      setPercentDone(percentDone + 10);
    }
  };

  const releaseFilm = (): void => {
    navigate("/release-home");
  };

  return (
    <>
      <div>Film Name</div>
      <div>Date</div>
      <div>Budget: 0 million</div>
      <div>Popularity: 0</div>
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
        <button>Advertise</button>
        <button onClick={advanceWeek}>Pass Week</button>
        <button>Content</button>
        {readyForRelease && <button onClick={releaseFilm}>Release</button>}
      </div>
    </>
  );
};

export default FilmingHome;
