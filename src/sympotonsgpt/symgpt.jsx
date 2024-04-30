import React, { useState } from 'react';
import { model } from '../minichatgpt/mainmodule';
var finn="";
// Function to preprocess the input symptoms
const preprocessInput = (input) => {

    // Create an array to hold the binary representation of symptoms
    const binarySymptoms = [];
    const allSymptoms = [
        "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering",
        "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue",
        "muscle_wasting", "vomiting", "burning_micturition", "spotting_urination", "fatigue",
        "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", "weight_loss",
        "restlessness", "lethargy", "patches_in_throat", "irregular_sugar_level", "cough",
        "high_fever", "sunken_eyes", "breathlessness", "sweating", "dehydration", "indigestion",
        "headache", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes",
        "back_pain", "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
        "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
        "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm", "throat_irritation",
        "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion", "chest_pain", "weakness_in_limbs",
        "fast_heart_rate", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool",
        "irritation_in_anus", "neck_pain", "dizziness", "cramps", "bruising", "obesity", "swollen_legs",
        "swollen_blood_vessels", "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails",
        "swollen_extremeties", "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
        "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck",
        "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance", "unsteadiness",
        "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort", "foul_smell_of_urine",
        "continuous_feel_of_urine", "passage_of_gases", "internal_itching", "toxic_look_(typhos)",
        "depression", "irritability", "muscle_pain", "altered_sensorium", "red_spots_over_body",
        "belly_pain", "abnormal_menstruation", "dischromic_patches", "watering_from_eyes",
        "increased_appetite", "polyuria", "family_history", "mucoid_sputum", "rusty_sputum",
        "lack_of_concentration", "visual_disturbances", "receiving_blood_transfusion",
        "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen",
        "history_of_alcohol_consumption", "blood_in_sputum", "prominent_veins_on_calf", "palpitations",
        "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling",
        "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails", "blister",
        "red_sore_around_nose", "yellow_crust_ooze", "fever"
    ];
    // Your array of symptoms here...

    // Loop through all symptoms
    for (let symptom of allSymptoms) {
        // If the symptom is present in the input, add 1, otherwise add 0
        binarySymptoms.push(input.includes(symptom) ? 1 : 0);
    }

    // Reshape the binary symptoms array to be a 2D array with a single row
    const jsonData = {
        features: [binarySymptoms]  // Wrap binarySymptoms in an array to represent a single sample
    };
    return jsonData;
};

const DiseasePredictionForm = () => {
    const [symptomsList, setSymptomsList] = useState(['']);
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [llmtext, setllmtext] = useState(null);
    const [solutionn, setsolutionn] = useState("");

    const handleInputChange = (index, value) => {
        const updatedSymptomsList = [...symptomsList];
        updatedSymptomsList[index] = value;
        setSymptomsList(updatedSymptomsList);
    };

    const handleAddSymptom = () => {
        setSymptomsList([...symptomsList, '']);
    };

    const handleRemoveSymptom = (index) => {
        const updatedSymptomsList = [...symptomsList];
        updatedSymptomsList.splice(index, 1);
        setSymptomsList(updatedSymptomsList);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Combine all symptoms into a single string
            const combinedSymptoms = symptomsList.join(', ');

            // Preprocess the input symptoms
            const preprocessedData = preprocessInput(combinedSymptoms);

            // Make API call to predict disease
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(preprocessedData),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch prediction');
            }

            const data = await response.json();
            setPrediction(data.predicted_disease);
            finn=data.predicted_disease;
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch prediction. Please try again.');
        } finally {
            setLoading(false);
        }

        // Fetch additional predictions from the language model
        try {
            const defaultPrompt = symptomsList.join(', ') + `these are the symptoms of the patient. Now predict what disease the patient may have. Please provide the top 5 diseases.
      Osteoarthristis, Common Cold, Juvenile Rheumatoid Arthritis, Bacterial Infection, Hepatitis C, Constipation, Typhoid, (vertigo) Paroymsal Positional Vertigo, Gastroenteritis, 
      Hepatitis B, Hyperthyroidism, AIDS, Malaria, Hyperhidrosis, Obesity, Bronchial Asthma, Hypothyroidism, Migraine, Cervical spondylosis, Allergy, Tuberculosis, Impetigo, Insomnia, 
      Hypertension, Pneumonia, Hypoglycemia, ibromyalgia, Hypogonadism, Male, Heart attack, Peptic ulcer diseae, Urinary tract infection, Weight loss, Anxiety, Acne, Psoriasis, Depression, 
      Dimorphic hemmorhoids(piles), Diarrhea, GERD, Bronchitis, Diabetes
      `;
            const result = await model.generateContent(defaultPrompt);
            const response = await result.response.text();
            setllmtext(response.trim());
        } catch (error) {
            setllmtext("Oops! Something went wrong while retrieving the response. Please try again.");
        }

        try {
            const defaultPrompt2 = `Give Treatment plans for the disease ${finn} and medication`;
            const result = await model.generateContent(defaultPrompt2);
            const response = await result.response.text();
            setsolutionn(response.trim());

            console.log(finn);
        } catch (error) {
            setsolutionn("Oops! Something went wrong while retrieving the response. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <br /><br />
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="border p-3 m-2">
                        <h2>Disease Prediction</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <button type="button" onClick={handleAddSymptom} className="btn btn-primary mb-3"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {symptomsList.map((symptom, index) => (
                                <div key={index} className="mb-3">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={symptom}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            placeholder="e.g., fever, headache, cough"
                                            required
                                        />
                                        <button type="button" onClick={() => handleRemoveSymptom(index)} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            ))}

                            <button type="submit" disabled={loading} className="btn btn-success">{loading ? 'Predicting...' : 'Predict'}</button>
                        </form>
                        {error && <p className="text-danger mt-3">Error: {error}</p>}
                        {prediction && (
                            <div className="">
                                <h3 className="mt-4">Prediction:</h3>
                                <p>{prediction}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="border p-3 m-2">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="">
                                <h2>AI Predicted Top 5 Answers</h2>
                                {/* <p>{llmtext}</p> */}
                                <ul>
                                    {llmtext && llmtext.split('\n').map((disease, index) => (
                                        <li key={index}>{disease}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-8 text-center">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        {/* {solutionn} */}
                        <ul className="list-unstyled">
                            {solutionn.split('\n').map((line, index) => (
                                <li key={index}>
                                    {line.startsWith('**') ? <strong>{line.substring(2)}</strong> : line}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DiseasePredictionForm;
