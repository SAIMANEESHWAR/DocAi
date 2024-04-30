import os
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS  

# Get the directory where the script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

# Load the trained model
model_path = os.path.join(base_dir, 'model.pkl')
with open(model_path, 'rb') as f:
    model = pickle.load(f)

# Initialize Flask application
app = Flask(__name__)
CORS(app)  

# Define route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get input symptoms from JSON data
    data = request.json
    input_features = data.get('features')

    # Make prediction using the loaded model
    predicted_disease = model.predict(input_features)

    # Return the predicted disease as JSON response
    return jsonify({'predicted_disease': predicted_disease[0]})

if __name__ == '__main__':
    app.run(debug=True)