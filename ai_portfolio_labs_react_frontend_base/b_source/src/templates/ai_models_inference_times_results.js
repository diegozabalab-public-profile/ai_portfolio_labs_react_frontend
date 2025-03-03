import React, { useState } from "react";
import "../App.css";
import API_BASE_URL from "../config";

const AiModelsInferenceTimesResults = () => {
    const [selected_file, set_selected_file] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        set_selected_file(event.target.files[0]);
    };

    const uploadImage = async () => {
        if (!selected_file) {
            alert("Please select an image first!");
            return;
        }

        const form_data =
            new FormData();

        form_data.append("image", selected_file.name);

        setLoading(true);

        setResult(null);

        const request_options =
            {
                method: "POST",
                body: form_data,
            };

        const api_request_url =
            `${API_BASE_URL}/api/ai_models_inference_times_comparison/`;

        form_data.append("api_request_url", api_request_url);

        const form_data_entries = {};

          form_data.forEach((value, key) => {
              form_data_entries[key] = value;
          });

        try {
            const response =
                await fetch(api_request_url, request_options);

            const data =
                await response.json();

            setResult(data);

        } catch (error) {
          console.error("Error:", error);

          alert(
              "Error processing image. Please try again.\n" +
              "Error: " + error.message + "\n" +
              "Posted Data: " + JSON.stringify(
                  form_data_entries,
                  null,
                  4)
          );

      } finally {
          setLoading(false);
      }};

    return (
        <div className="container">
            <h1>⚔️ Battle of AI: TensorFlow vs. PyTorch</h1>
            <p>Upload an image and see which framework predicts faster!</p>

            <div className="button-row">
                <input
                    type="file"
                    id="imageInput"
                    onChange={handleFileChange}
                    hidden
                />

                {/* Custom File Upload Button */}
                <button
                    className="custom-file-button"
                    onClick={() => document.getElementById("imageInput").click()}
                >
                    Choose Image
                </button>

                {/* Selected File Name Display */}
                <span className="selected-file">
                    {selected_file ? selected_file.name : "No file chosen yet..."}
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
