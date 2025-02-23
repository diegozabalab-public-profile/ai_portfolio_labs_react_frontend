import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./templates/home_page";
import AiModelsInferenceTimesResults from "./templates/ai_models_inference_times_results";
import NotFound from "./templates/not_found"; // Custom 404 page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai_battle" element={<AiModelsInferenceTimesResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
