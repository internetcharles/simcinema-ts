import React from "react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateCompany from "./Components/Create/CreateCompany";
import Create from "./Components/Create/CreateMovie";
import Header from "./Components/Global/Header";
import StartPage from "./Components/Start/StartPage";

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
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
