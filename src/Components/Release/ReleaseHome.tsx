import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const ReleaseHome: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [theaters, setTheaters] = useState<number>(22);

  useEffect(() => {
    if (theaters < 0) {
      setTheaters(0);
    }
  }, [theaters]);

  const advanceWeek = (): void => {
    if (theaters <= 10) {
      setTheaters(0);
      return;
    }
    if (theaters > 0) {
      setTheaters(theaters - 100);
    }
  };

  const continueToSummary = (): void => {
    navigate("/summary");
  };

  return (
    <>
      <div>Film Name</div>
      <div>{theaters}</div>
      <div className="buttons">
        <button>Advertise</button>
        {theaters > 0 && <button onClick={advanceWeek}>Pass Week</button>}
        {theaters === 0 && <button onClick={continueToSummary}>Summary</button>}
      </div>
    </>
  );
};

export default ReleaseHome;
