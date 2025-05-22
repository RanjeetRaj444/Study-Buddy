import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Admin from "../Pages/Admin/Admin";
import Homepage from "../Pages/Homepage";
import SingleBooksPage from "../Pages/singleBooksPage";
import SolutionPage from "../Pages/solutionPage";

import ProductPage from "../Pages/ProductPage";
import { useSelector } from "react-redux";
import PriveteRoute from "./priveteRoute";

const MainRoutes = () => {
  let token = useSelector((store) => store.auth.token);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={token !== undefined ? <Homepage /> : <LandingPage />}
        />
        <Route path="/explanations" element={<ProductPage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route
          path="/books/:subject/:id"
          element={
            <PriveteRoute>
              <SingleBooksPage />
            </PriveteRoute>
          }
        />
        <Route path="/solution/:id" element={<SolutionPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
