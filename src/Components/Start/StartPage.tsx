import * as React from "react";
import { Link } from "react-router-dom";

const StartPage: React.FC = (props) => {
  return (
    <div>
      <Link to="/create-company">Create New Studio</Link>
      <button>History</button>
    </div>
  );
};

export default StartPage;
