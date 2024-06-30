import React, { useState, useEffect } from 'react';
import './MedicationAlarm.css';

const MedicationAlarm = () => {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [repeatOption, setRepeatOption] = useState('none');
  const [repeatDays, setRepeatDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [showReminder, setShowReminder] = useState(false); // State to control reminder popup
  const [currentReminder, setCurrentReminder] = useState(null); // Store current reminder details
  const [speaking, setSpeaking] = useState(false); // Track speech synthesis state

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      medications.forEach(med => {
        const medTime = new Date(`${med.date}T${med.time}:00`);
        if (now.getDay() === medTime.getDay() && now.getHours() === medTime.getHours() && now.getMinutes() === medTime.getMinutes()) {
          const message = `Time to take your medication: ${med.name}`;
          speak(message);
          setCurrentReminder(med); // Set current reminder
          setShowReminder(true); // Show reminder popup
        }
      });
    }, 5000); // Check every second for demonstration purposes

    return () => clearInterval(interval);
  }, [medications]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true); // Mark speech synthesis as active
    utterance.onend = () => setSpeaking(false); // Reset speaking status after speech ends
  };

  const closeReminder = () => {
    setShowReminder(false); // Close reminder popup
    setCurrentReminder(null); // Clear current reminder
    // Stop speech synthesis if it's currently active
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  const addMedication = () => {
    if (name && date && time) {
      const selectedDays = Object.keys(repeatDays).filter(day => repeatDays[day]);
      const newMedication = { name, date, time, repeatOption, repeatDays: selectedDays };
      setMedications([...medications, newMedication]);
      setName('');
      setDate('');
      setTime('');
      setRepeatOption('none');
      setRepeatDays({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      });
    }
  };

  const deleteMedication = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  const handleRepeatDayChange = (day) => {
    setRepeatDays({ ...repeatDays, [day]: !repeatDays[day] });
  };

  return (
    <div className="mt-5">    
      <div className="mt-5 medication-alarm">
      <h1>Medication Alarm</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Medication Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <div>
          <label>Repeat:</label>
          <select value={repeatOption} onChange={(e) => setRepeatOption(e.target.value)}>
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="alternate">Alternate Days</option>
            <option value="weekly">Weekly</option>
          </select>
          {repeatOption === 'weekly' && (
            <div>
              <label>Repeat on:</label>
              {Object.keys(repeatDays).map(day => (
                <label key={day}>
                  <input
                    type="checkbox"
                    checked={repeatDays[day]}
                    onChange={() => handleRepeatDayChange(day)}
                  />
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </label>
              ))}
            </div>
          )}
        </div>
        <button onClick={addMedication}>Add Medication</button>
      </div>
      <ul className="medication-list">
        {medications.map((med, index) => (
          <li key={index}>
            {med.name} at {med.time} on {med.date}
            {med.repeatOption !== 'none' && (
              <span>, Repeats {med.repeatOption === 'daily' ? 'Daily' : med.repeatOption === 'alternate' ? 'Alternate Days' : `on ${med.repeatDays.join(', ')}`}</span>
            )}
            <button onClick={() => deleteMedication(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {showReminder && (
        <div className="reminder-popup">
          <p>Time to take your medication: {currentReminder.name}</p>
          <button onClick={closeReminder}>Stop Alarm</button>
        </div>
      )}
    </div>
    </div>

  );
};

export default MedicationAlarm;