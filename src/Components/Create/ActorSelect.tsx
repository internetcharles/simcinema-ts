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
import { actors } from "./Data/movieData";
import { MovieOption } from "./Interfaces/CreateInterface";

interface Props {}

const ActorSelect: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movieInfo = useAppSelector(selectMovieInfo);
  const budgetInfo = useAppSelector(selectBudget);

  const selectActor = (actor: MovieOption): void => {
    if (actor.price > budgetInfo.moneyRemaining) {
      alert("Not enough money!");
    } else {
      dispatch(adjustMoneyRemaining(actor.price));
      dispatch(setMovieInfo({ ...movieInfo, leadActor: actor.name }));
      navigate("/actress-select");
    }
  };

  return (
    <>
      <MovieInfoHeader />
      <div>Actor Select</div>
      <div>
        {actors.map((actor) => (
          <>
            <img src={actor.portrait} alt="" />
            <div>{actor.name}</div>
            <div>{`${actor.price} million`}</div>
            <div>{actor.status}</div>
            <div>
              {actor.status === "Available" || actor.status === "None" ? (
                <button onClick={() => selectActor(actor)}>Select</button>
              ) : null}
            </div>
          </>
        ))}
        <Link to="/actress-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default ActorSelect;
