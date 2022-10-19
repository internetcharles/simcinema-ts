import React from "react";
import { Auth, getAuth } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  convertBudgetToFullNumber,
  convertToMillions,
} from "../../Common/utils";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { adjustFunds } from "../../Redux/Reducers/companyInfoSlice";
import MiniButton from "../Global/MiniButton";
import Window from "../Global/Window";
import "./Styles/Summary.scss";
import { saveCompany } from "../../firebase";

interface Props {}

const Summary: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth: Auth = getAuth();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const movieInfo = useAppSelector((state) => state.movieInfo);
  const companyInfo = useAppSelector((state) => state.companyInfo);
  const { earnings } = budgetInfo;
  const { companyName } = companyInfo;

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const calculateDIEarnings = (): number[] => {
    const domestic = getRandomArbitrary(4, 6);
    const international = 10 - domestic;

    const dGross = convertToMillions(Math.floor(earnings * (domestic / 10)));
    const iGross = convertToMillions(
      Math.floor(earnings * (international / 10)),
    );

    return [dGross, iGross];
  };

  const [dGross, iGross] = calculateDIEarnings();

  const calculateStudioEarnings = (): number[] => {
    const budgetInMillions = convertBudgetToFullNumber(budgetInfo.budget);

    if (earnings < budgetInMillions) {
      return [0, 0];
    } else {
      const extraEarnings = earnings - budgetInMillions;
      const profits = convertToMillions(Math.floor(extraEarnings));
      const splitProfits = convertToMillions(Math.floor(extraEarnings / 2));
      return [splitProfits, profits];
    }
  };

  const [splitProfits, profits] = calculateStudioEarnings();

  const navigateHome = (): void => {
    dispatch(adjustFunds(splitProfits));
    if (auth.currentUser) {
      saveCompany(auth.currentUser, companyInfo).then(() => navigate("/"));
    }
  };

  return (
    <Window label="Summary" size="medium-window">
      <div className="summary-container">
        <div className="summary-header">Summary</div>
        <div className="summary-title-header">{movieInfo.title}</div>
        <div className="summary-earnings-container">
          <div>Domestic Gross: ${dGross} million</div>
          <div>International Gross: ${iGross} million</div>
          <div>Total Gross: ${convertToMillions(earnings)} million</div>
        </div>
        <div className="summary-profits-container">
          <div>Budget: ${budgetInfo.budget} million</div>
          <div
            className={
              profits > 0
                ? "summary-earnings-profits"
                : "summary-earnings-profits-red"
            }
          >
            Profits: ${profits} million
          </div>
          <div>Distributor&lsquo;s Cut: ${splitProfits} million</div>
          <div>
            {companyName}&lsquo;s Cut: ${splitProfits} million
          </div>
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
