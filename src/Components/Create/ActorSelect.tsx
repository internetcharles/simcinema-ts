import React from "react";
import { Link } from "react-router-dom";
import { actors } from "./Data/movieData";

interface Props {}

const ActorSelect: React.FC<Props> = (props) => {
  return (
    <>
      <div>Actor Select</div>
      <div>
        {actors.map((actor) => (
          <>
            <img src={actor.portrait} alt="" />
            <div>{actor.name}</div>
            <div>{`${actor.price} million`}</div>
            <div>{actor.status}</div>
            <div>
              {actor.status === "Available" || actor.status === "None" ? (
                <button>Select</button>
              ) : null}
            </div>
          </>
        ))}
        <Link to="/actress-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default ActorSelect;
