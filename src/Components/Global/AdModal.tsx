import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  addMagazineNewspaperAds,
  addMovieTrailers,
  addPosters,
  addTvCommercials,
} from "../../Redux/Reducers/budgetSlice";

interface Props {
  handlePurchase?: () => void;
}

const AdModal: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const budgetInfo = useAppSelector((state) => state.budgetInfo);
  const { adInfo } = budgetInfo;

  const handleAdBuy = (id: number): void => {
    switch (id) {
      case 0:
        if (budgetInfo.moneyRemaining >= 6) {
          dispatch(addTvCommercials());
          props.handlePurchase?.();
        } else {
          alert("Not enough money!");
        }
        break;
      case 1:
        if (budgetInfo.moneyRemaining >= 4) {
          dispatch(addMovieTrailers());
          props.handlePurchase?.();
        } else {
          alert("Not enough money!");
        }
        break;
      case 2:
        if (budgetInfo.moneyRemaining >= 2) {
          dispatch(addMagazineNewspaperAds());
          props.handlePurchase?.();
        } else {
          alert("Not enough money!");
        }
        break;
      case 3:
        if (budgetInfo.moneyRemaining >= 1) {
          dispatch(addPosters());
          props.handlePurchase?.();
        } else {
          alert("Not enough money!");
        }
        break;
    }
  };

  return (
    <>
      <div>Advertising</div>
      <div>
        <div>TV Commercials</div>
        <div>Price: $6 million</div>
        <div>You have: {adInfo.tvCommercials}</div>
        <button onClick={() => handleAdBuy(0)}>Buy</button>
      </div>
      <div>
        <div>Movie trailers</div>
        <div>Price: $4 million</div>
        <div>You have: {adInfo.movieTrailers}</div>
        <button onClick={() => handleAdBuy(1)}>Buy</button>
      </div>
      <div>
        <div>Magazine/Newspaper ads</div>
        <div>Price: $2 million</div>
        <div>You have: {adInfo.magazineNewspaperAds}</div>
        <button onClick={() => handleAdBuy(2)}>Buy</button>
      </div>
      <div>
        <div>Posters</div>
        <div>Price: $1 million</div>
        <div>You have: {adInfo.posters}</div>
        <button onClick={() => handleAdBuy(3)}>Buy</button>
      </div>
    </>
  );
};

export default AdModal;
