import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./templates/home_page.js";
import AiModelsInferenceTimesResults from "./templates/ai_models_inference_times_results.js";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai_battle" element={<AiModelsInferenceTimesResults />} />
      </Routes>
    </Router>
  );
}

export default App;
