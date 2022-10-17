import React from "react";
import { FcAdvertising } from "react-icons/fc";
import { AiOutlineCalendar } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Styles/FilmingButtonContainer.scss";

interface Props {
  handleAdModalPress: () => void;
  advanceWeek: () => void;
  readyForRelease: boolean;
  releaseFilm: () => void;
}

const FilmingButtonContainer: React.FC<Props> = ({
  handleAdModalPress,
  advanceWeek,
  readyForRelease,
  releaseFilm,
}) => {
  return (
    <div className="filming-button-container-buttons">
      <div className="filming-button-container-inner">
        <div
          onClick={handleAdModalPress}
          className="filming-button-container-button"
        >
          <FcAdvertising className="filming-button-icon" />
          <div>Advertise</div>
        </div>
        <div onClick={advanceWeek} className="filming-button-container-button">
          <AiOutlineCalendar className="filming-button-icon" />
          <div>Pass Week</div>
        </div>
        <div className="filming-button-container-button">
          <ImCancelCircle className="filming-button-icon" />
          <div>Terminate</div>
        </div>
        {readyForRelease && (
          <div
            onClick={releaseFilm}
            className="filming-button-container-button"
          >
            <BsArrowRightCircle className="filming-button-icon" />
            <div>Release</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmingButtonContainer;
