from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load your trained model (e.g. DecisionTree, KNN, etc.)
model = joblib.load('data\\knn_model.pkl')  # Make sure model.pkl exists in backend folder

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    try:
        df = pd.read_csv(file)

        # Make sure the features match your trained model
        predictions = model.predict(df)

        # Convert numerical predictions to labels if needed
        readable_predictions = ["Anomaly" if p != "normal" and p != 0 else "Normal" for p in predictions]

        return jsonify({"predictions": readable_predictions})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
