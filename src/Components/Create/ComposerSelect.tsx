import React from "react";
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
import MovieInfoHeader from "../Global/MovieInfoHeader";
import { actors, composers } from "./Data/movieData";
import { MovieOption } from "./Interfaces/CreateInterface";

interface Props {}

const ComposerSelect: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector(selectMovieInfo);
  const budgetInfo = useAppSelector(selectBudget);

  const selectComposer = (composer: MovieOption): void => {
    if (composer.price > budgetInfo.moneyRemaining) {
      alert("Not enough money!");
    } else {
      dispatch(adjustMoneyRemaining(composer.price));
      dispatch(setMovieInfo({ ...movieInfo, composer: composer.name }));
      navigate("/vfx-select");
    }
  };

  return (
    <>
      <MovieInfoHeader />
      <div>Composer Select</div>
      <div>
        {composers.map((composer) => (
          <>
            <img src={composer.portrait} alt="" />
            <div>{composer.name}</div>
            <div>{`${composer.price} million`}</div>
            <div>{composer.status}</div>
            <div>
              {composer.status === "Available" || composer.status === "None" ? (
                <button onClick={() => selectComposer(composer)}>Select</button>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ComposerSelect;
