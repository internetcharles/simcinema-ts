import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import { resetMovieInfo } from "../../Redux/Reducers/movieInfoSlice";

interface Props {}

const Summary: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <div>Domestic Gross: $0 million</div>
      <div>International Gross: $0 million</div>
      <div>Total Gross: $0 million</div>
      <button onClick={navigateHome}>Return to Home</button>
    </>
  );
};

export default Summary;
