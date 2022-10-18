import React from "react";
import { BudgetState } from "../../Redux/Reducers/budgetSlice";
import "./Styles/AdvertisingBox.scss";

interface Props {
  budgetInfo: BudgetState;
  halved: boolean;
}

const AdvertisingBox: React.FC<Props> = ({ budgetInfo, halved }) => {
  return (
    <div
      className={
        halved ? "advertising-box-container-half" : "advertising-box-container"
      }
    >
      <div className="advertising-box-header">Advertising:</div>
      <div className="advertising-box-details-container">
        <div>TV Commercials: ${budgetInfo.adInfo.tvCommercials} million</div>
        <div>Movie trailers: ${budgetInfo.adInfo.movieTrailers} million</div>
        <div>
          Magazine/Newspaper ads: ${budgetInfo.adInfo.magazineNewspaperAds}{" "}
          million
        </div>
        <div>Posters: ${budgetInfo.adInfo.posters} million</div>
      </div>
    </div>
  );
};

export default AdvertisingBox;
