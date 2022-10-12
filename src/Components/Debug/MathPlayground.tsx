import React, { useState } from "react";
import { generateArray } from "../../Common/utils";

interface Props {}

const MathPlayground: React.FC<Props> = (props) => {
  const [currentHype, setCurrentHype] = useState<number>(0);
  const [targetHype, setTargetHype] = useState<number>(0);
  const [hypeArray, setHypeArray] = useState<number[]>([]);

  const handleMath = (): void => {
    setHypeArray(generateArray(currentHype, targetHype, 7));
  };

  return (
    <>
      <div>HYPE MATH TESTING</div>
      <input
        type="number"
        onInput={(e) =>
          setCurrentHype(parseInt((e.target as HTMLInputElement).value))
        }
      />
      <input
        type="number"
        onInput={(e) =>
          setTargetHype(parseInt((e.target as HTMLInputElement).value))
        }
      />
      <button onClick={handleMath}>Submit</button>
      <div>Result</div>
      {hypeArray.map((num) => (
        <div key={num}>{Math.floor(num)}</div>
      ))}
    </>
  );
};

export default MathPlayground;
