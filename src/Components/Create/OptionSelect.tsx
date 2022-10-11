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
import CompanyHeader from "../Global/CompanyHeader";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import { movieOptions, optionPath } from "./Data/movieData";
import { MovieOption } from "./Interfaces/CreateInterface";

interface Props {}

const OptionSelect: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector(selectMovieInfo);
  const budgetInfo = useAppSelector(selectBudget);

  const [currentOption, setCurrentOption] = useState<number>(0);

  const selectOption = (option: MovieOption): void => {
    if (option.price > budgetInfo.moneyRemaining) {
      alert("Not enough money!");
    } else if (currentOption >= optionPath.length) {
      dispatch(adjustMoneyRemaining(option.price));
      dispatch(
        setMovieInfo({
          ...movieInfo,
          [optionPath[currentOption].category]: option.name,
        }),
      );
      setCurrentOption(currentOption + 1);
    } else {
      setCurrentOption(0);
      navigate("/filming-home");
    }
  };

  return (
    <>
      <CompanyHeader />
      <MovieInfoHeader />
      <div>Actor Select</div>
      <div>
        {movieOptions[currentOption].map((option) => (
          <>
            <img src={option.portrait} alt="" />
            <div>{option.name}</div>
            <div>{`${option.price} million`}</div>
            <div>{option.status}</div>
            <div>
              {option.status === "Available" || option.status === "None" ? (
                <button onClick={() => selectOption(option)}>Select</button>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default OptionSelect;
