import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h2>Welcome to Resume Builder</h2>
      <p>Create a professional resume easily.</p>
      <Link to="/signup">
        <button className="submit-button">Sign Up</button>
      </Link>
      <Link to="/login" style={{ marginLeft: '10px' }}>
        <button className="submit-button">Login</button>
      </Link>
    </div>
  );
};

export default WelcomePage;