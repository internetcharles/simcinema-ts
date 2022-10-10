import React from "react";
import { Link } from "react-router-dom";
import { composers } from "./Data/movieData";

interface Props {}

const ComposerSelect: React.FC<Props> = (props) => {
  return (
    <>
      <div>Composer Select</div>
      <div>
        {composers.map((composer) => (
          <>
            <img src={composer.portrait} alt="" />
            <div>{composer.name}</div>
            <div>{`${composer.price} million`}</div>
            <div>{composer.status}</div>
            <div>
              {composer.status === "Available" || composer.status === "None" ? (
                <button>Select</button>
              ) : null}
            </div>
          </>
        ))}
        <Link to="/vfx-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default ComposerSelect;
