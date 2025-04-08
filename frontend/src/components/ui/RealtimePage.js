import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function RealtimePage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/realtime")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const formattedLogs = data.map((item) => {
              if (item.error) return `❌ Error: ${item.error}`;
              return `🌐 ${item.src_ip} ➡ ${item.dst_ip} | Length: ${item.length} | Prediction: ${item.prediction}`;
            });
            setLogs((prev) => [...prev, ...formattedLogs]);
          }
        })
        .catch((err) => {
          console.error("Polling error:", err);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-cyan-300 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">🔴 Real-Time Anomaly Detection</h1>
        <div className="w-full max-w-3xl bg-gray-900 border border-cyan-700 p-6 rounded-xl shadow-xl overflow-auto max-h-[500px]">
          {logs.map((log, idx) => (
            <div key={idx} className="text-sm border-b border-gray-700 py-1">
              {log}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
