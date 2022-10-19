/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import "./Styles/ForgotPassword.scss";

interface Props {}

const ForgotPassword: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={async () => await sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don`&apos;`t have an account? <Link to="/register">Register</Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
