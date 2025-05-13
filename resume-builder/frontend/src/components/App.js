import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ResumeOptions from "./ResumeOptions";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import ImportResume from "./importResume/ImportResume";
import CreateResume from './CreateResumeForm'; // ✅ Correct, matches your actual file name
import '../styles/index.css';

 // assuming App.css is one level above this file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-options" element={<ResumeOptions />} />
        <Route path="/resume-form" element={<ResumeForm />} />
        <Route path="/resume-preview" element={<ResumePreview />} />
        <Route path="/import-resume" element={<ImportResume />} />
        <Route path="/create-resume" element={<CreateResume />} />
      </Routes>
    </Router>
  );
};

export default App;
