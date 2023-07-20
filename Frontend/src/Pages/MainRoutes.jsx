import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import Admin from "./Admin/Admin";
import LoginForm from "../Components/Login&Signup/LoginForm";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explanations" element={"product page"} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
