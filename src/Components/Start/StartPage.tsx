/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import Window from "../Global/Window";
import InfoHeader from "./InfoHeader";
import { FaFilm } from "react-icons/fa";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import MiniButton from "../Global/MiniButton";
import "./Styles/StartPage.scss";
import CreateCompany from "./CreateCompany";
import { convertToMillions, gradeMovie } from "../../Common/utils";
import StudioInfoModal from "./StudioInfoModal";
import { resetMovieInfo } from "../../Redux/Reducers/movieInfoSlice";
import { resetBudget } from "../../Redux/Reducers/budgetSlice";
import { resetData } from "../Create/Data/studioData";
import { fetchCompany } from "../../Redux/Reducers/companyInfoSlice";
import { auth, logout } from "../../firebase";
import { Movie } from "../Create/Interfaces/CreateInterface";
import Loading from "../Global/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import MovieInfoModal from "./MovieInfoModal";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const companyInfo = useAppSelector((state) => state.companyInfo);
  const [showCompanyModal, setShowCompanyModal] = useState<boolean>(false);
  const [showStudioInfoModal, setShowStudioInfoModal] =
    useState<boolean>(false);
  const [currentHistoryItem, setCurrentHistoryItem] = useState<Movie | null>(
    null,
  );
  const [showHistoryItemDetails, setShowHistoryItemDetails] =
    useState<boolean>(false);
  const [dismissed, setDismissed] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    } else {
      try {
        dispatch(fetchCompany(auth.currentUser));
      } catch {
        console.log(error);
      }
    }
  }, []);

  const reset = (): void => {
    dispatch(resetMovieInfo());
    dispatch(resetBudget());
    resetData();
  };

  const handleNewMoviePress = (): void => {
    if (companyInfo.companyName !== "") {
      reset();
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

  const handleLogoutPress = (): void => {
    logout().then(() => {
      navigate("/");
    });
  };

  const handleStudioInfoPress = (): void => {
    setShowStudioInfoModal(!showStudioInfoModal);
  };

  const handleHistoryItemPress = (movie: Movie): void => {
    setCurrentHistoryItem(movie);
    setShowHistoryItemDetails(true);
  };

  const handleHistoryDetailsOKPress = (): void => {
    setShowHistoryItemDetails(false);
  };

  const newMovieArray: Movie[] = [...companyInfo.history];

  if (companyInfo.requestInProgress || loading) return <Loading />;
  return (
    <>
      <Link to="/release-home">DEBUG</Link>
      {!showCompanyModal && (
        <Window size="large-window" label="SimCinema">
          <div className="start-page-container">
            <InfoHeader
              playerName={companyInfo.playerName}
              companyName={companyInfo.companyName}
            />
            <div className="start-page-content-container">
              <div className="start-page-history-container">
                <div className="start-page-films-produced">Films produced:</div>
                <div className="start-page-history-box">
                  {newMovieArray.length > 0 ? (
                    newMovieArray.reverse().map((movie, idx) => (
                      <div
                        className="history-item"
                        key={idx}
                        onClick={() => handleHistoryItemPress(movie)}
                      >
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
                  <MiniButton
                    handleButtonPress={handleLogoutPress}
                    label="Logout"
                    icon={<RiLogoutBoxRLine size={14} />}
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
      {showHistoryItemDetails && (
        <MovieInfoModal
          movieInfo={currentHistoryItem}
          handleOKPress={handleHistoryDetailsOKPress}
        />
      )}
    </>
  );
};

export default StartPage;
