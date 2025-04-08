import React, { useState } from "react";
import Header from "./Header";

export default function PredictPage() {
  const [csvContent, setCsvContent] = useState(null);
  const [fileName, setFileName] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".csv")) {
      setFileName(file.name);
      const text = await file.text();
      const rows = text.trim().split("\n").map((row) => row.split(","));
      setCsvContent(rows);
      setPredictionResult(null); // clear old prediction if any
    } else {
      alert("Please upload a valid CSV file");
    }
  };

  const handleDelete = () => {
    setCsvContent(null);
    setFileName("");
    setPredictionResult(null);
    document.getElementById("csvInput").value = "";
  };

  const handlePredict = async () => {
    const fileInput = document.getElementById("csvInput");
    const file = fileInput.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.predictions) {
        setPredictionResult(result.predictions);
      } else {
        alert("Prediction failed: " + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
  };

  const handleDownload = () => {
    if (!csvContent || !predictionResult) return;

    const header = csvContent[0];
    const rows = csvContent.slice(1);
    const extendedHeader = [...header, "Prediction"];
    const extendedRows = rows.map((row, idx) => [...row, predictionResult[idx] || ""]);

    const csvString =
      [extendedHeader, ...extendedRows]
        .map((row) => row.map((cell) => `"${cell}"`).join(","))
        .join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "predicted_results.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Combine CSV data + predictions
  const getCombinedRows = () => {
    if (!csvContent) return [];
    const header = csvContent[0];
    const rows = csvContent.slice(1);
    const extendedHeader = predictionResult ? [...header, "Prediction"] : header;
    const extendedRows = predictionResult
      ? rows.map((row, idx) => [...row, predictionResult[idx] || ""])
      : rows;
    return [extendedHeader, ...extendedRows];
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center drop-shadow-lg">
          Predict Network Anomalies
        </h1>

        <div className="w-full max-w-6xl bg-white/5 border border-cyan-600/30 backdrop-blur-md p-8 rounded-3xl shadow-[0_0_45px_rgba(0,255,255,0.15)]">
          {/* File Upload */}
          <label className="block text-lg mb-6">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
              id="csvInput"
            />
            <div className="cursor-pointer border border-cyan-500 px-6 py-3 rounded-xl text-center text-cyan-300 hover:bg-cyan-500/10 active:scale-95 transition-all">
              {fileName ? fileName : "📁 Click to Upload CSV File"}
            </div>
          </label>

          {/* CSV Preview */}
          {csvContent && (
            <>
              <div className="mt-6 max-h-80 overflow-auto border border-white/10 rounded-lg p-4 bg-white/5 shadow-inner">
                <table className="table-auto w-full text-sm">
                  <thead>
                    <tr>
                      {getCombinedRows()[0].map((header, idx) => (
                        <th key={idx} className="px-2 py-1 border border-gray-700 text-cyan-300">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getCombinedRows()
                      .slice(1)
                      .map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className={`px-2 py-1 border border-gray-700 ${
                                j === row.length - 1 && predictionResult
                                  ? cell === "Anomaly"
                                    ? "text-red-400"
                                    : "text-green-400"
                                  : "text-gray-200"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <button
                  onClick={handlePredict}
                  className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
                >
                  Predict
                </button>

                <button
                  onClick={handleDelete}
                  className="px-6 py-3 border border-red-500 text-red-400 font-medium rounded-xl hover:bg-red-500/10 transition-all"
                >
                  Delete CSV
                </button>

                {predictionResult && (
                  <button
                    onClick={handleDownload}
                    className="px-6 py-3 border border-green-500 text-green-400 font-medium rounded-xl hover:bg-green-500/10 transition-all"
                  >
                    ⬇️ Download CSV
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
