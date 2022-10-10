import React from "react";
import { Link } from "react-router-dom";
import { sfx } from "./Data/movieData";

interface Props {}

const SFXSelect: React.FC<Props> = (props) => {
  return (
    <>
      <div>SFX Studio Select</div>
      <div>
        {sfx.map((sfxStudio) => (
          <>
            <img src={sfxStudio.portrait} alt="" />
            <div>{sfxStudio.name}</div>
            <div>{`${sfxStudio.price} million`}</div>
            <div>{sfxStudio.status}</div>
            <div>
              {sfxStudio.status === "Available" ||
              sfxStudio.status === "None" ? (
                <button>Select</button>
              ) : null}
            </div>
          </>
        ))}
        <Link to="/filming-home">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default SFXSelect;
