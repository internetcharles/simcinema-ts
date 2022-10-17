import React, { useState } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { setCompanyInfo } from "../../Redux/Reducers/companyInfoSlice";
import Window from "../Global/Window";
import { BsFillFilePersonFill } from "react-icons/bs";
import "./Styles/CreateCompany.scss";

interface Props {
  handleNewCompanyPress: () => void;
  isAnimated: boolean;
  dismissed: boolean;
}

const CreateCompany: React.FC<Props> = ({
  handleNewCompanyPress,
  dismissed,
  isAnimated,
}) => {
  const dispatch = useAppDispatch();

  const [companyName, setCompanyName] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");
  const [inputValid, setInputValid] = useState<boolean>(true);

  const submitCompanyInfo = (): void => {
    if (playerName === "" || companyName === "") {
      setInputValid(false);
      return;
    }
    dispatch(
      setCompanyInfo({
        playerName,
        companyName,
        history: [],
      }),
    );
    handleNewCompanyPress();
  };

  return (
    <Window
      size="small-window"
      label="Create Company"
      isAnimated={isAnimated}
      dismissed={dismissed}
    >
      <div className="company-container">
        <div className="company-title-container">
          <div className="company-header-icon-container">
            <BsFillFilePersonFill size={30} />
          </div>
          <div>You are a producer who owns a small production company.</div>
        </div>
        <div className="company-name-input-box"></div>
        <div>
          <div className="company-input-container">
            <div className="company-input-label">Your name:</div>
            <input
              className="company-input-input"
              value={playerName}
              onInput={(e) =>
                setPlayerName((e.target as HTMLInputElement).value)
              }
              placeholder="John"
            />
          </div>
          <div className="company-input-container">
            <div className="company-input-label">Your company:</div>
            <input
              className="company-input-input"
              value={companyName}
              onInput={(e) =>
                setCompanyName((e.target as HTMLInputElement).value)
              }
              placeholder="Magnificent Films"
            />
          </div>
        </div>
        {!inputValid && (
          <div className="company-invalid-input">
            Please enter a name and company name!
          </div>
        )}
        <div className="company-name-input"></div>
        <button className="company-name-submit" onClick={submitCompanyInfo}>
          Submit
        </button>
      </div>
    </Window>
  );
};

export default CreateCompany;
