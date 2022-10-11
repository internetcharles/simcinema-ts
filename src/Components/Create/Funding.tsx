import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { setBudget } from "../../Redux/Reducers/budgetSlice";
import CompanyHeader from "../Global/CompanyHeader";
import MovieInfoHeader from "../Global/MovieInfoHeader";
import { requestOffer, resetData, studios } from "./Data/studioData";
import { Studio } from "./Interfaces/CreateInterface";
import StudioButton from "./StudioButton";

const Funding: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [studioList, setStudioList] = useState<Studio[]>([...studios]);

  const onStudioClick = (studio: Studio): void => {
    if (!studio.offerRequested) {
      setStudioList([...requestOffer(studio)]);
    } else if (studio.offer > 0) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Accept the offer?")) {
        dispatch(setBudget(studio.offer));
        resetData();
        navigate("/cast-select");
      } else {
        console.log("no");
      }
    }
  };

  return (
    <>
      <CompanyHeader />
      <MovieInfoHeader />
      <div>Funding</div>
      <div>
        {studioList.map((studio) => (
          <StudioButton
            key={studio.studioName}
            onStudioClick={() => onStudioClick(studio)}
            studio={studio}
          />
        ))}
        <Link to="/actor-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default Funding;
