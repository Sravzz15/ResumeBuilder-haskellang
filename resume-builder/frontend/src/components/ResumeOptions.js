// File: src/components/ResumeOptions.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ResumeOptions.css'; // ✅ Correct path


const ResumeOptions = () => {
  return (
    <div className="resume-options-container">
      <h2 className="form-title">Resume Options</h2>
      <div className="button-group">
        <Link to="/resume-form">
          <button className="submit-button">Create New Resume</button>
        </Link>
        <Link to="/import-resume">
          <button className="submit-button">Import Resume</button>
        </Link>
        <Link to="/dashboard">
          <button className="back-button">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default ResumeOptions;
