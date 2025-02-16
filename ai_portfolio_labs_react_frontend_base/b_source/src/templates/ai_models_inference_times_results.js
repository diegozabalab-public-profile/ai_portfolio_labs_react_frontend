import React, { useState } from "react";
import API_BASE_URL from "../config";

const AiModelsInferenceTimesResults = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();

    formData.append("image", selectedFile);

    setLoading(true);

    setResult(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/ai_models_inference_times_comparison/`, {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setResult(data);

    } catch (error) {
      console.error("Error:", error);
      alert("Error processing image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>⚔️ Battle of AI: TensorFlow vs. PyTorch</h1>
      <p>Upload an image and see which framework predicts faster!</p>

      <div className="button-row">
        <input type="file" id="imageInput" onChange={handleFileChange} hidden />

        {/* Custom File Upload Button */}
        <button className="custom-file-button" onClick={() => document.getElementById("imageInput").click()}>
          Choose Image
        </button>

        {/* Selected File Name Display */}
        <span className="selected-file">
          {selectedFile ? selectedFile.name : "No file chosen yet..."}
        </span>

        {/* Run Models Button */}
        <button className="run-models-button" onClick={uploadImage}>
          {loading ? "Processing..." : "Run Models"}
        </button>
      </div>

      {loading && <p className="loading">Processing... ⏳</p>}

      {result && (
        <div className="result">
          <p><strong>TensorFlow:</strong> {result.tensorflow_time} ms</p>
          <p><strong>PyTorch:</strong> {result.pytorch_time} ms</p>
          <h3>🏆 Winner: {result.winner}!</h3>
        </div>
      )}
    </div>
  );
};

export default AiModelsInferenceTimesResults;
