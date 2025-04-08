import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/ui/Home";
import PredictPage from "./components/ui/PredictPage"; // if this is the correct path
import RealtimePage from "./components/ui/RealtimePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<PredictPage />} />
      <Route path="/realtimesimulation" element={<RealtimePage/>}/>
    </Routes>
  );
}
