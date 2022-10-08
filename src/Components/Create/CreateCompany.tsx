import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const CreateCompany: React.FC = (props: Props) => {
  return (
    <>
      <div>Create Company</div>
      <div className="company-name-input">
        <div>Your name:</div>
        <input placeholder="Magnificent Films" />
      </div>
      <div className="company-name-input">
        <div>Your company:</div>
        <input placeholder="Magnificent Films" />
      </div>
      <Link to="/create-movie">Okay</Link>
    </>
  );
};

export default CreateCompany;
