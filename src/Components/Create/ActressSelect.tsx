import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  adjustMoneyRemaining,
  selectBudget,
} from "../../Redux/Reducers/budgetSlice";
import {
  selectMovieInfo,
  setMovieInfo,
} from "../../Redux/Reducers/movieInfoSlice";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import { actresses } from "./Data/movieData";
import { MovieOption } from "./Interfaces/CreateInterface";

interface Props {}

const ActressSelect: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector(selectMovieInfo);
  const budgetInfo = useAppSelector(selectBudget);

  const selectActress = (actress: MovieOption): void => {
    if (actress.price > budgetInfo.moneyRemaining) {
      alert("Not enough money!");
    } else {
      dispatch(adjustMoneyRemaining(actress.price));
      dispatch(setMovieInfo({ ...movieInfo, leadActress: actress.name }));
      navigate("/composer-select");
    }
  };

  return (
    <>
      <MovieInfoHeader />
      <div>Actress Select</div>
      <div>
        {actresses.map((actress) => (
          <>
            <img src={actress.portrait} alt="" />
            <div>{actress.name}</div>
            <div>{`${actress.price} million`}</div>
            <div>{actress.status}</div>
            <div>
              {actress.status === "Available" || actress.status === "None" ? (
                <button onClick={() => selectActress(actress)}>Select</button>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ActressSelect;
