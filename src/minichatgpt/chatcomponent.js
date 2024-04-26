import React, { useState, useEffect } from 'react';
import { model } from './mainmodule.js';
import { useLocation } from 'react-router-dom';

function ChatApp() {
  const location = useLocation()
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const { convertedText } =location.state;
  console.log(convertedText);
  useEffect(() => {
    const getInitialResponse = async () => {
      try {
        const defaultPrompt = convertedText;
        appendUserMessage(defaultPrompt);
        const result = await model.generateContent(defaultPrompt);
        const response = await result.response.text();
        appendBotMessage(response.trim());
      } catch (error) {
        appendErrorMessage("Oops! Something went wrong while retrieving the response. Please try again.");
      }
    };

    getInitialResponse();
  }, []);

  const getChatResponse = async () => {
    const userText = inputText.trim();
    if (!userText) return;

    appendUserMessage(userText);

    try {
      const result = await model.generateContent(userText);
      const response = await result.response.text();
      appendBotMessage(response.trim());
    } catch (error) {
      appendErrorMessage("Oops! Something went wrong while retrieving the response. Please try again.");
    }
    setInputText('');
  };

  const appendUserMessage = (message) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      { type: 'user', text: message }
    ]);
  };

  const appendBotMessage = (message) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      { type: 'bot', text: message }
    ]);
  };

  const appendErrorMessage = (errorMessage) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      { type: 'error', text: errorMessage }
    ]);
  };

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100 border" >
        <div className="col-md-8 col-lg-10 chat-container h-100" >
          {chatMessages.map((message, index) => (
            <div key={index} className={`${message.type}-message-container`}>
              <p className={`${message.type}-message`}>
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="row fixed-bottom mb-3">
        <div className="col">
          <div className="typing-container">
            <textarea
              className='form-control'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
                  e.preventDefault();
                  getChatResponse();
                }
              }}
              spellCheck="false"
              placeholder="Enter a prompt here"
              required
            ></textarea>
            <button
              id="send-btn"
              className="btn btn-primary mt-2"
              onClick={getChatResponse}
            >Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
