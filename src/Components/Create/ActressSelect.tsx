import React from "react";
import { Link } from "react-router-dom";
import { actresses } from "./Data/movieData";

interface Props {}

const ActressSelect: React.FC<Props> = (props) => {
  return (
    <>
      <div>Actress Select</div>
      <div>
        {actresses.map((actress) => (
          <>
            <img src={actress.portrait} alt="" />
            <div>{actress.name}</div>
            <div>{`${actress.price} million`}</div>
            <div>{actress.status}</div>
            <div>
              {actress.status === "Available" || actress.status === "None" ? (
                <button>Select</button>
              ) : null}
            </div>
          </>
        ))}
        <Link to="/composer-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default ActressSelect;
