import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import Window from "../Global/Window";
import InfoHeader from "./InfoHeader";
import { FaFilm } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";
import MiniButton from "../Global/MiniButton";
import "./Styles/StartPage.scss";
import CreateCompany from "./CreateCompany";
import { convertToMillions, gradeMovie } from "../../Common/utils";
import StudioInfoModal from "./StudioInfoModal";
import { resetMovieInfo } from "../../Redux/Reducers/movieInfoSlice";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import { resetData } from "../Create/Data/studioData";

const StartPage: React.FC = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const companyInfo = useAppSelector((state) => state.companyInfo);

  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showStudioInfoModal, setShowStudioInfoModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [largeWindowDismissed, setLargeWindowDismissed] = useState(false);

  useEffect(() => {
    if (companyInfo.companyName === "") {
      setShowCompanyModal(true);
    }
    console.log(companyInfo.history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reset = (): void => {
    dispatch(resetMovieInfo());
    dispatch(resetBudget());
    resetData();
  };

  const handleNewMoviePress = (): void => {
    if (companyInfo.companyName !== "") {
      reset();
      setLargeWindowDismissed(true);
      setTimeout(() => {
        navigate("/create-movie");
      }, 400);
    } else {
      setShowCompanyModal(true);
    }
  };

  const handleNewCompanyPress = (): void => {
    setDismissed(true);
    setTimeout(() => {
      setShowCompanyModal(false);
    }, 400);
  };

  const handleStudioInfoPress = (): void => {
    setShowStudioInfoModal(!showStudioInfoModal);
  };

  return (
    <>
      {!showCompanyModal && (
        <Window
          size="large-window"
          label="SimCinema"
          isAnimated={true}
          dismissed={largeWindowDismissed}
        >
          <div className="start-page-container">
            <InfoHeader
              playerName={companyInfo.playerName}
              companyName={companyInfo.companyName}
            />
            <div className="start-page-content-container">
              <div className="start-page-history-container">
                <div className="start-page-films-produced">Films produced:</div>
                <div className="start-page-history-box">
                  {companyInfo.history.length > 0 ? (
                    companyInfo.history.map((movie) => (
                      <div className="history-item" key={movie.earnings}>
                        {movie.title}: {movie.averageScore}/10 ($
                        {convertToMillions(movie.earnings)} million) (
                        {gradeMovie(
                          convertToMillions(movie.earnings),
                          movie.budget,
                        )}
                        )
                      </div>
                    ))
                  ) : (
                    <div className="no-history-text">
                      No films produced yet!
                    </div>
                  )}
                </div>
              </div>
              <div className="start-page-bottom-container">
                <div className="start-page-button-container">
                  <MiniButton
                    handleButtonPress={handleNewMoviePress}
                    icon={<FaFilm size={14} />}
                    label="New Film"
                  />
                  <MiniButton
                    handleButtonPress={handleStudioInfoPress}
                    icon={<BsFillCameraReelsFill size={14} />}
                    label="Studio Info"
                  />
                </div>
                <div className="start-page-info-window">
                  <div className="start-page-info-window-text">
                    SimCinema v0.0.1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Window>
      )}
      {showCompanyModal && (
        <CreateCompany
          isAnimated={true}
          dismissed={dismissed}
          handleNewCompanyPress={() => handleNewCompanyPress()}
        />
      )}
      {showStudioInfoModal && (
        <StudioInfoModal handleStudioInfoPress={handleStudioInfoPress} />
      )}
    </>
  );
};

export default StartPage;
