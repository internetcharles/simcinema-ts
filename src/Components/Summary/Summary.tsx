import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import { resetMovieInfo } from "../../Redux/Reducers/movieInfoSlice";

interface Props {}

const Summary: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const earnings = useAppSelector((state) => state.budgetInfo.earnings);
  const dispatch = useDispatch();

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const calculateDIEarnings = (): number[] => {
    const domestic = getRandomArbitrary(4, 6);
    const international = 10 - domestic;

    console.log(domestic);
    console.log(international);
    const dGross = Math.floor(earnings * (domestic / 10));
    const iGross = Math.floor(earnings * (international / 10));

    return [dGross, iGross];
  };

  const reset = (): void => {
    dispatch(resetMovieInfo());
    dispatch(resetBudget());
  };

  const navigateHome = (): void => {
    reset();
    navigate("/");
  };

  return (
    <>
      <div>Summary</div>
      <div>Domestic Gross: ${calculateDIEarnings()[0]}</div>
      <div>International Gross: ${calculateDIEarnings()[1]}</div>
      <div>Total Gross: ${earnings}</div>
      <button onClick={navigateHome}>Return to Home</button>
    </>
  );
};

export default Summary;
