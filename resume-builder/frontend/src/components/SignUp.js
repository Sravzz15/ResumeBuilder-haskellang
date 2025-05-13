import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Sign Up</h2>
      <p>Sign up form placeholder.</p>
      <Link to="/login">
        <button className="submit-button">Go to Login</button>
      </Link>
    </div>
  );
};

export default SignUp;