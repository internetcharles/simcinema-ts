import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { setCompanyInfo } from "../../Redux/Reducers/companyInfoSlice";
import Window from "../Global/Window";

interface Props {
  closeModal: () => void;
}

const CreateCompany: React.FC<Props> = ({ closeModal }) => {
  const dispatch = useAppDispatch();

  const [companyName, setCompanyName] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");

  const submitCompanyInfo = (): void => {
    if (playerName === "" || companyName === "") {
      alert("Please enter a name and company name!");
      return;
    }
    dispatch(
      setCompanyInfo({
        companyName,
        playerName,
        history: [],
      }),
    );
    closeModal();
  };

  return (
    <Window size="small" label="Create Company">
      <div>Create Company</div>
      <div className="company-name-input">
        <div>Your name:</div>
        <input
          value={playerName}
          onInput={(e) => setPlayerName((e.target as HTMLInputElement).value)}
          placeholder="John"
        />
      </div>
      <div className="company-name-input">
        <div>Your company:</div>
        <input
          value={companyName}
          onInput={(e) => setCompanyName((e.target as HTMLInputElement).value)}
          placeholder="Magnificent Films"
        />
      </div>
      <button onClick={submitCompanyInfo}>Submit</button>
    </Window>
  );
};

export default CreateCompany;
