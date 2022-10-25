/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Window from "../Global/Window";
import "./Styles/Login.scss";
import Loading from "../Global/Loading";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/start-page");
  }, [user, loading]);
  if (loading) return <Loading />;
  return (
    <Window label="Welcome" size="large-window">
      <div className="login">
        <div className="login-header">SimCinema</div>
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            onClick={async () =>
              await logInWithEmailAndPassword(email, password)
            }
          >
            Login
          </button>
          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don&apos;t have an account? <Link to="/register">Register</Link>{" "}
            now.
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Login;
