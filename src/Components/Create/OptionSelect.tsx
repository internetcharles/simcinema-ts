import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  adjustMoneyRemaining,
  selectBudget,
} from "../../Redux/Reducers/budgetSlice";
import {
  selectMovieInfo,
  setMovieInfo,
} from "../../Redux/Reducers/movieInfoSlice";
import { adjustQuality } from "../../Redux/Reducers/qualitySlice";
import Window from "../Global/Window";
import { movieOptions, optionPath } from "./Data/movieData";
import { MovieOption } from "./Interfaces/CreateInterface";
import OptionButton from "./OptionButton";
import "./Styles/OptionSelect.scss";

interface Props {}

const OptionSelect: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector(selectMovieInfo);
  const budgetInfo = useAppSelector(selectBudget);
  const { genre } = movieInfo;

  const [currentOption, setCurrentOption] = useState<number>(0);
  const [showAcceptWindow, setShowAcceptWindow] = useState<boolean>(false);
  const [currentActor, setCurrentActor] = useState<MovieOption | null>(null);
  const [enoughMoneyBool, setEnoughMoneyBool] = useState<boolean>(false);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [cast, setCast] = useState<MovieOption[]>([]);

  const selectOption = (option: MovieOption): void => {
    setCurrentActor(option);
    if (option.price > budgetInfo.moneyRemaining) {
      setEnoughMoneyBool(false);
      setShowAcceptWindow(true);
    } else {
      setEnoughMoneyBool(true);
      setShowAcceptWindow(true);
    }
  };

  const acceptOption = (): void => {
    if (currentOption < optionPath.length - 1) {
      if (currentActor) {
        setCast([...cast, currentActor]);
        dispatch(adjustMoneyRemaining(currentActor?.price));
        dispatch(
          adjustQuality(
            currentActor?.quality[genre as keyof typeof currentActor.quality],
          ),
        );
      }
      dispatch(
        setMovieInfo({
          ...movieInfo,
          [optionPath[currentOption].category]: currentActor,
        }),
      );
      setCurrentOption(currentOption + 1);
      setShowAcceptWindow(false);
    } else {
      if (currentActor) {
        setCast([...cast, currentActor]);
        dispatch(adjustMoneyRemaining(currentActor?.price));
        dispatch(
          adjustQuality(
            currentActor?.quality[genre as keyof typeof currentActor.quality],
          ),
        );
        dispatch(
          setMovieInfo({
            ...movieInfo,
            [optionPath[currentOption].category]: currentActor,
            cast: [...cast, currentActor],
          }),
        );
      }
      setDismissed(true);
      setShowAcceptWindow(false);
      setTimeout(() => {
        setCurrentOption(0);
        setShowAcceptWindow(false);
        navigate("/filming-home");
      }, 400);
    }
  };

  const rejectOption = (): void => {
    setShowAcceptWindow(false);
  };

  return (
    <>
      <Window
        isAnimated={true}
        dismissed={dismissed}
        label="Cast Select"
        size="large-window"
      >
        <div className="option-select-money-header">
          Money Remaining: ${budgetInfo.moneyRemaining} million
        </div>
        <div className="option-select-option-container">
          {movieOptions[currentOption].map((option) => (
            <OptionButton
              onOptionClick={() => selectOption(option)}
              key={option.name}
              option={option}
            />
          ))}
        </div>
      </Window>
      {showAcceptWindow && (
        <Window label="Alert" size="small-window">
          <div className="funding-accept-window-container">
            {enoughMoneyBool ? (
              <>
                <div className="funding-accept-window-header">
                  <div>Hire option?</div>
                  <div className="funding-accept-window-studio">
                    <div>{currentActor?.name}</div>
                    <div>${currentActor?.price} million</div>
                    <div>
                      Money Remaining: ${budgetInfo.moneyRemaining} million
                    </div>
                  </div>
                </div>
                <div className="funding-accept-button-container">
                  <button
                    onClick={acceptOption}
                    className="funding-accept-button"
                  >
                    Yes
                  </button>
                  <button
                    onClick={rejectOption}
                    className="funding-accept-button"
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="option-select-reject-container">
                  <div>Not enough money</div>
                  <div className="option-select-reject-money-remaining">
                    You have: ${budgetInfo.moneyRemaining} million remaining
                  </div>
                  <button
                    className="funding-accept-button"
                    onClick={rejectOption}
                  >
                    OK
                  </button>
                </div>
              </>
            )}
          </div>
        </Window>
      )}
    </>
  );
};

export default OptionSelect;
