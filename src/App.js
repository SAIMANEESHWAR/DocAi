import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import FileUpload from './fileUpload/FileUpload';
import Home from './Home/Home';
import Registration from './UserCredentials/Registration';
import Login from './UserCredentials/Login';
import Dashboard from './dashboard/dashboard';
import NestedRetrieve from './dashboard/dashboardcomponents/NestedRetrieve';
import NestedUpload from './dashboard/dashboardcomponents/NestedUpload';
import Chatbot from './minichatgpt/chatbot';
import ChatComponent from './minichatgpt/chatcomponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Register' element={<Registration />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      {/* <Route path='/FileUpload' element={<FileUpload />}></Route> */}
      <Route path='/Dashboard' element={<Dashboard />}>
            <Route path="NestedRetrieve" element={<NestedRetrieve />} />
            <Route path="NestedUpload" element={<NestedUpload />} />
        </Route>
        <Route path='/Chatbot' element={<Chatbot />}></Route>
        <Route path='/ChatComponent' element={<ChatComponent />}></Route>

      {/* <Route path='/* ' element={<Pagenotfound />}></Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
