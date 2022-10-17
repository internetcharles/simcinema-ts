import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import { resetMovieInfo } from "../../Redux/Reducers/movieInfoSlice";
import { resetData } from "../Create/Data/studioData";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import "./Styles/Summary.scss";

interface Props {}

const Summary: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const earnings = useAppSelector((state) => state.budgetInfo.earnings);
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const dispatch = useDispatch();

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const calculateDIEarnings = (): number[] => {
    const domestic = getRandomArbitrary(4, 6);
    const international = 10 - domestic;

    const dGross = Math.floor(earnings * (domestic / 10));
    const iGross = Math.floor(earnings * (international / 10));

    return [dGross, iGross];
  };

  const reset = (): void => {
    dispatch(resetMovieInfo());
    dispatch(resetBudget());
    dispatch(resetMovieInfo());
    resetData();
  };

  const navigateHome = (): void => {
    reset();
    navigate("/");
  };

  return (
    <Window label="Summary" size="small-window">
      <div className="summary-container">
        <div className="summary-header">Summary</div>
        <div className="summary-title-header">{movieInfo.title}</div>
        <div className="summary-earnings-container">
          <div>Domestic Gross: ${calculateDIEarnings()[0]}</div>
          <div>International Gross: ${calculateDIEarnings()[1]}</div>
          <div>Total Gross: ${earnings}</div>
        </div>
        <MiniButton
          icon=""
          handleButtonPress={() => navigateHome()}
          label="Home"
        />
      </div>
    </Window>
  );
};

export default Summary;
