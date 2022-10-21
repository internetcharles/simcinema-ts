import React, { useState, useEffect } from "react";
import { ImWarning } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setMovieInfo } from "../../Redux/Reducers/movieInfoSlice";
import { adjustQuality } from "../../Redux/Reducers/qualitySlice";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import { ratingData } from "./Data/movieData";
import "./Styles/ContentSelect.scss";

interface Props {}

const ContentSelect: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [rating, setRating] = useState<string>("G");
  const [violence, setViolence] = useState<number>(1);
  const [profanity, setProfanity] = useState<number>(1);
  const [sexNudity, setSexNudity] = useState<number>(1);
  const [dismissed, setDismissed] = useState<boolean>(false);

  const movieInfo = useAppSelector((state) => state.movieInfo);

  useEffect(() => {
    setRating(determineRating(violence, profanity, sexNudity));
  }, [violence, profanity, sexNudity]);

  const determineRating = (
    violence: number,
    profanity: number,
    sexNudity: number,
  ): string => {
    if (violence + profanity + sexNudity <= 3) {
      return "G";
    } else if (
      violence + profanity + sexNudity > 2 &&
      violence + profanity + sexNudity <= 4
    ) {
      return "PG";
    } else if (
      violence + profanity + sexNudity > 4 &&
      violence + profanity + sexNudity <= 6
    ) {
      return "PG-13";
    } else if (
      violence + profanity + sexNudity > 6 &&
      violence + profanity + sexNudity <= 10
    ) {
      return "R";
    } else {
      return "NC-17";
    }
  };

  const handleSubmit = (rating: string): void => {
    console.log(ratingData[rating][movieInfo.genre]);
    setDismissed(true);
    setTimeout(() => {
      dispatch(setMovieInfo({ ...movieInfo, rating }));
      dispatch(adjustQuality(ratingData[rating][movieInfo.genre]));
      navigate("/filming-home");
    }, 400);
  };

  return (
    <Window
      dismissed={dismissed}
      isAnimated={true}
      label="Content"
      size="medium-window"
    >
      <div className="content-select-container">
        <div className="content-select-header">
          <ImWarning size={32} />
          <div className="content-select-header-title">Film content:</div>
        </div>
        <div className="content-select-items">
          <div>
            <div className="content-select-item-header">Violence:</div>
            <div className="content-select-radio-button-container">
              <div className="content-select-radio-button-div">
                <input
                  name="violence"
                  type="radio"
                  onChange={(e) => setViolence(parseInt(e.target.value))}
                  value="1"
                  checked={true}
                />
                Light
              </div>
              <div className="content-select-radio-button-div">
                <input
                  name="violence"
                  type="radio"
                  onChange={(e) => setViolence(parseInt(e.target.value))}
                  value="2"
                />
                Medium
              </div>
              <div className="content-select-radio-button-div">
                <input
                  name="violence"
                  type="radio"
                  onChange={(e) => setViolence(parseInt(e.target.value))}
                  value="4"
                />
                Heavy
              </div>
            </div>
          </div>
          <div>
            <div className="content-select-item-header">Profanity:</div>
            <form className="content-select-radio-button-container">
              <div className="content-select-radio-button-div">
                <input
                  name="profanity"
                  type="radio"
                  onChange={(e) => setProfanity(parseInt(e.target.value))}
                  value="1"
                  checked={true}
                />
                Light
              </div>
              <div className="content-select-radio-button-div">
                <input
                  name="profanity"
                  type="radio"
                  onChange={(e) => setProfanity(parseInt(e.target.value))}
                  value="2"
                />
                Medium
              </div>
              <div className="content-select-radio-button-div">
                <input
                  name="profanity"
                  type="radio"
                  onChange={(e) => setProfanity(parseInt(e.target.value))}
                  value="4"
                />
                Heavy
              </div>
            </form>
          </div>
          <div>
            <div className="content-select-item-header">Sex/Nudity:</div>
            <div className="content-select-radio-button-container">
              <div className="content-select-radio-button-div">
                <input
                  name="sexNudity"
                  type="radio"
                  onChange={(e) => setSexNudity(parseInt(e.target.value))}
                  value="1"
                  checked={true}
                />
                Light
              </div>
              <div className="content-select-radio-button-div">
                <input
                  name="sexNudity"
                  type="radio"
                  onChange={(e) => setSexNudity(parseInt(e.target.value))}
                  value="3"
                />
                Medium
              </div>
              <div className="content-select-radio-button-div">
                <input
                  name="sexNudity"
                  type="radio"
                  onChange={(e) => setSexNudity(parseInt(e.target.value))}
                  value="5"
                />
                Heavy
              </div>
            </div>
          </div>
        </div>
        <div className="content-select-rating">Rating: {rating}</div>
        <div className="content-select-submit">
          <MiniButton
            icon=""
            label="Submit"
            handleButtonPress={() => handleSubmit(rating)}
          />
        </div>
      </div>
    </Window>
  );
};

export default ContentSelect;
