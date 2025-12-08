import React from "react";
import Movie from "./pages/Movie";
import BuyTiket from "./pages/BuyTiket";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/buyTiket" element={<BuyTiket />} />
    </Routes>
  );
}

export default Router;
