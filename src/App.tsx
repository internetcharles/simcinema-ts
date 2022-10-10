import React from "react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import ActorSelect from "./Components/Create/ActorSelect";
import ActressSelect from "./Components/Create/ActressSelect";
import ComposerSelect from "./Components/Create/ComposerSelect";
import CreateCompany from "./Components/Create/CreateCompany";
import Create from "./Components/Create/CreateMovie";
import Funding from "./Components/Create/Funding";
import SFXSelect from "./Components/Create/SFXSelect";
import VFXSelect from "./Components/Create/VFXSelect";
import FilmingHome from "./Components/Filming/FilmingHome";
import Header from "./Components/Global/Header";
import ReleaseHome from "./Components/Release/ReleaseHome";
import StartPage from "./Components/Start/StartPage";
import Summary from "./Components/Summary/Summary";

function BasicLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App(): JSX.Element {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<StartPage />} />
          <Route path="/create-company" element={<CreateCompany />} />
          <Route path="/create-movie" element={<Create />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/actor-select" element={<ActorSelect />} />
          <Route path="/actress-select" element={<ActressSelect />} />
          <Route path="/composer-select" element={<ComposerSelect />} />
          <Route path="/vfx-select" element={<VFXSelect />} />
          <Route path="/sfx-select" element={<SFXSelect />} />
          <Route path="/filming-home" element={<FilmingHome />} />
          <Route path="/release-home" element={<ReleaseHome />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
