import React from "react";
import AiModelsInferenceTimesResults from "./templates/ai_models_inference_times_results";
import HomePage from "./templates/home_page";


import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Home Section */}
      <HomePage />

      {/* AI Models Inference Time Results Section */}
      <AiModelsInferenceTimesResults />
    </div>
  );
}

export default App;
