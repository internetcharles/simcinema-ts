import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  addMagazineNewspaperAds,
  addMovieTrailers,
  addPosters,
  addTvCommercials,
} from "../../Redux/Reducers/budgetSlice";
import { MdAttachMoney } from "react-icons/md";
import Window from "./Window";
import "./Styles/AdModal.scss";
import MiniButton from "./MiniButton";

interface Props {
  handleDonePress: () => void;
}

const AdModal: React.FC<Props> = ({ handleDonePress }) => {
  const dispatch = useAppDispatch();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const { adInfo, moneyRemaining } = budgetInfo;

  const [showNotEnoughMoney, setShowNotEnoughMoney] = useState<boolean>(false);

  const handleAdBuy = (id: number): void => {
    switch (id) {
      case 0:
        if (budgetInfo.moneyRemaining >= 6) {
          dispatch(addTvCommercials());
        } else {
          setShowNotEnoughMoney(true);
        }
        break;
      case 1:
        if (budgetInfo.moneyRemaining >= 4) {
          dispatch(addMovieTrailers());
        } else {
          setShowNotEnoughMoney(true);
        }
        break;
      case 2:
        if (budgetInfo.moneyRemaining >= 2) {
          dispatch(addMagazineNewspaperAds());
        } else {
          setShowNotEnoughMoney(true);
        }
        break;
      case 3:
        if (budgetInfo.moneyRemaining >= 1) {
          dispatch(addPosters());
        } else {
          setShowNotEnoughMoney(true);
        }
        break;
    }
  };

  return (
    <Window label="Advertising" size="medium-window">
      <div className="ad-modal-outer-container">
        <div className="ad-modal-ad-header-container">
          <MdAttachMoney color="green" size={20} />
          <div className="ad-modal-ad-header">Advertising:</div>
        </div>
        {showNotEnoughMoney && (
          <div className="ad-modal-not-enough-money">Not enough money!</div>
        )}
        <div className="ad-modal-container">
          <table>
            <thead>
              <tr>
                <th className="ad-modal-category-header">Kind:</th>
                <th className="ad-modal-category-header">Unit Price:</th>
                <th className="ad-modal-category-header">You have:</th>
                <th className="ad-modal-category-header">Purchase</th>
              </tr>
            </thead>
            <tbody>
              <tr className="ad-modal-ad-type-container">
                <td className="ad-modal-ad-type-title">TV Commercials</td>
                <td>Price: $6 million</td>
                <td className="ad-modal-ad-type-have">
                  {adInfo.tvCommercials}
                </td>
                <td
                  className="ad-modal-buy-button"
                  onClick={() => handleAdBuy(0)}
                >
                  Buy
                </td>
              </tr>
              <tr className="ad-modal-ad-type-container">
                <td className="ad-modal-ad-type-title">Movie trailers</td>
                <td>Price: $4 million</td>
                <td className="ad-modal-ad-type-have">
                  {adInfo.movieTrailers}
                </td>
                <td
                  className="ad-modal-buy-button"
                  onClick={() => handleAdBuy(1)}
                >
                  Buy
                </td>
              </tr>
              <tr className="ad-modal-ad-type-container">
                <td className="ad-modal-ad-type-title">
                  Magazine/Newspaper ads
                </td>
                <td>Price: $2 million</td>
                <td className="ad-modal-ad-type-have">
                  {adInfo.magazineNewspaperAds}
                </td>
                <td
                  className="ad-modal-buy-button"
                  onClick={() => handleAdBuy(2)}
                >
                  Buy
                </td>
              </tr>
              <tr className="ad-modal-ad-type-container">
                <td className="ad-modal-ad-type-title">Posters</td>
                <td>Price: $1 million</td>
                <td className="ad-modal-ad-type-have">{adInfo.posters}</td>
                <td
                  className="ad-modal-buy-button"
                  onClick={() => handleAdBuy(3)}
                >
                  Buy
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ad-modal-money-remaining">
          Money remaining: ${moneyRemaining} million
        </div>
        <div className="ad-modal-mini-button-container">
          <MiniButton
            icon=""
            label="Done"
            handleButtonPress={handleDonePress}
          />
        </div>
      </div>
    </Window>
  );
};

export default AdModal;
