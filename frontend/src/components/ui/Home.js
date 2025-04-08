import React from "react";
import Header from "./Header";


export default function Home() {
  const features = ["Fast Detection", "Low False Positives", "Real-time Monitoring", "Fast Detection", "Low False Positives", "Real-time Monitoring"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Replaced Navbar with Header */}
      <Header/>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
          Real-Time KNN Anomaly Detection
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Secure your network using intelligent intrusion detection.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6 rounded-2xl border border-indigo-600/20 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">{feature}</h3>
            <p className="text-gray-400 text-sm">
              Enhancing cybersecurity using KNN for detecting threats in real-time.
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm border-t border-gray-800 py-6 px-4">
        © {new Date().getFullYear()} KNN Anomaly Detection • RV College Of Engineering
      </footer>
    </div>
  );
}
