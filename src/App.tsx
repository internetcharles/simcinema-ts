import React from "react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import ContentSelect from "./Components/Create/ContentSelect";
import Create from "./Components/Create/CreateMovie";
import Funding from "./Components/Create/Funding";
import OptionSelect from "./Components/Create/OptionSelect";
import FilmingHome from "./Components/Filming/FilmingHome";
import ReleaseHome from "./Components/Release/ReleaseHome";
import ForgotPassword from "./Components/Start/ForgotPassword";
import Login from "./Components/Start/Login";
import Register from "./Components/Start/Register";
import Reset from "./Components/Start/Reset";
import StartPage from "./Components/Start/StartPage";
import Summary from "./Components/Summary/Summary";

function BasicLayout(): JSX.Element {
  return (
    <div className="desktop">
      <Outlet />
    </div>
  );
}

function App(): JSX.Element {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/start-page" element={<StartPage />} />
          <Route path="/create-movie" element={<Create />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/cast-select" element={<OptionSelect />} />
          <Route path="/content-select" element={<ContentSelect />} />
          <Route path="/filming-home" element={<FilmingHome />} />
          <Route path="/release-home" element={<ReleaseHome />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
