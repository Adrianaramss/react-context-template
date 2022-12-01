import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
             
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
