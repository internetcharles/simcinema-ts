import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { setCompanyInfo } from "../../Redux/Reducers/companyInfoSlice";

interface Props {}

const CreateCompany: React.FC = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      }),
    );
    navigate("/create-movie");
  };

  return (
    <>
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
    </>
  );
};

export default CreateCompany;
