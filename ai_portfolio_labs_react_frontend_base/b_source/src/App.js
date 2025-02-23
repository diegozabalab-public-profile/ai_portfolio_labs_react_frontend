import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./templates/home_page.js";
import AiModelsInferenceTimesResults from "./templates/ai_models_inference_times_results.js";
import NotFound from "./templates/not_found.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai_battle" element={<AiModelsInferenceTimesResults />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
