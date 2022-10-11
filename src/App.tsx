import React from "react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateCompany from "./Components/Create/CreateCompany";
import Create from "./Components/Create/CreateMovie";
import Funding from "./Components/Create/Funding";
import OptionSelect from "./Components/Create/OptionSelect";
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
          <Route path="/cast-select" element={<OptionSelect />} />
          <Route path="/filming-home" element={<FilmingHome />} />
          <Route path="/release-home" element={<ReleaseHome />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
