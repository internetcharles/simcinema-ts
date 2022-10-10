import React from "react";
import { Link } from "react-router-dom";
import { vfx } from "./Data/movieData";

interface Props {}

const VFXSelect: React.FC<Props> = (props) => {
  return (
    <>
      <div>VFX Studio Select</div>
      <div>
        {vfx.map((vfxStudio) => (
          <>
            <img src={vfxStudio.portrait} alt="" />
            <div>{vfxStudio.name}</div>
            <div>{`${vfxStudio.price} million`}</div>
            <div>{vfxStudio.status}</div>
            <div>
              {vfxStudio.status === "Available" ||
              vfxStudio.status === "None" ? (
                <button>Select</button>
              ) : null}
            </div>
          </>
        ))}
        <Link to="/sfx-select">DEBUG CONTINUE</Link>
      </div>
    </>
  );
};

export default VFXSelect;
