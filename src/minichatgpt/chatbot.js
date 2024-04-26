import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import { useNavigate } from 'react-router-dom';

function Chatbot() {
    const navigate = useNavigate();
    const go_to_ai = () => {
        navigate('/ChatComponent', { state: { convertedText } });
    }
    const [convertedText, setConvertedText] = useState('');

    useEffect(() => {
        const ff = sessionStorage.getItem("myanalyseimage");
        console.log(ff);

        if (!ff) return;

        Tesseract.recognize(ff)
            .then(({ data: { text } }) => {
                console.log("Recognized Text:", text);
                setConvertedText(text);
                // navigate('/ChatComponent', { state: { text } });
            })
            .catch(error => {
                console.error("Error recognizing text:", error);
            });
    }, [])
    return (
        // <div className="App">
        //     <button onClick={recognizeText}>submit</button>
        //     {/* <input type="file" id="myFile" name="filename" onChange={recognizeText} /> */}
        //     <br /><br />

        //     <label><b>Your Converted Text:</b></label><br /><br />

        //     <textarea cols="30" name="original" rows="10" style={{ width: '100%' }} value={convertedText} readOnly />
        //     {convertedText&&(
        //         <button onClick={go_to_ai}>start chat</button>
        //     )}
        // </div>
        <div className="App">
            {/* <button onClick={recognizeText}>submit</button> */}
            {/* <input type="file" id="myFile" name="filename" onChange={recognizeText} /> */}
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <label className="font-weight-bold">Your Converted Text:</label>
                        <textarea className="form-control " cols="30" name="original" rows="10" style={{ width: '100%' }} value={convertedText} readOnly />
                        <br/>
                        {convertedText && (
                            <button className="btn btn-primary mt-3" onClick={go_to_ai}>Start Chat</button>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Chatbot;
