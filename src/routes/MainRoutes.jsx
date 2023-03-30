import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonalPage from "../pages/PersonalPage";
import JobPositionPage from "../pages/JobPositionPage";
import SuccessPage from "../pages/SuccessPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalPage />} />
      <Route path="/job" element={<JobPositionPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default MainRoutes;
