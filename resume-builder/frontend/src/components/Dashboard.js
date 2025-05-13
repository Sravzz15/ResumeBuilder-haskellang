import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const importedResume = location.state?.importedResume;

  return (
    <div className="dashboard-container">
      <h2 className="form-title">Dashboard</h2>

      {/* Show imported resume data if available */}
      {importedResume ? (
        <div className="imported-resume">
          <h3>Imported Resume Data</h3>
          <p><strong>Name:</strong> {importedResume.name || 'N/A'}</p>
          <p><strong>Email:</strong> {importedResume.email || 'N/A'}</p>
          <p><strong>Phone:</strong> {importedResume.phone || 'N/A'}</p>
          {importedResume.education?.length > 0 ? (
            <div>
              <strong>Education:</strong>
              <ul>
                {importedResume.education.map((edu, idx) => (
                  <li key={idx}>{edu}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p><strong>Education:</strong> Not provided</p>
          )}
          <p>You can edit this data in the resume form if needed.</p>
        </div>
      ) : (
        <p>No imported resume data available.</p>
      )}

      {/* Buttons */}
      <div className="button-group">
        

        <button className="submit-button" onClick={() => navigate('/resume-options')}>
          Resume Options
        </button>

        <button className="back-button" onClick={() => navigate('/')}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
