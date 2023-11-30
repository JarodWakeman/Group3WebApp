import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import SurveyForm from './SurveyForm'; // Import the SurveyForm component
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <><><Navbar /></>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/survey" element={<SurveyForm />} />
      </Routes>
    </BrowserRouter></>
    
  );
}

export default App;
