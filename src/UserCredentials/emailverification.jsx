import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login'; // Adjust the import path as needed

const VerifyOTPComponent = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [verifiedEmail, setVerifiedEmail] = useState('');

    const verifyOTP = async () => {
        try {
            const response = await axios.post("https://bookbackend-4.onrender.com/verify-otp", {
                email,
                userEnteredOTP: otp
            });

            console.log(response);
            setVerifiedEmail(email);
            navigateToLogin(); // Navigate to login after email verification
        } catch (error) {
            console.log("Failed to verify OTP");
        }
    };

    const navigateToLogin = () => {
        // Navigate to login component with verified email as prop
        navigate('/login', { state: { verifiedEmail } });
    };

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); verifyOTP(); }}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="otp">OTP</label>
                    <input
                        type="text"
                        className="form-control"
                        id="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Verify</button>
            </form>
        </div>
    );
};

export default VerifyOTPComponent;
