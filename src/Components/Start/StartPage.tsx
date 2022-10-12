import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const StartPage: React.FC = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/create-company">Create New Studio</Link>
      <button>History</button>
      <button onClick={() => navigate("/math")}>DEBUG MATH</button>
    </div>
  );
};

export default StartPage;
