import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileTypeSelector from "./FileTypeSelector";
import FileUpload from "./FileUpload";
import ValidateResume from "./ValidateResume";
import "./ImportResume.css"; // Updated import path

const ImportResume = () => {
  const [fileType, setFileType] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [validationResult, setValidationResult] = useState(null);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (validationResult && validationResult.success && validationResult.data) {
      navigate('/dashboard', { state: { importedResume: validationResult.data } });
    } else {
      console.error('Cannot proceed: Validation result is invalid or unsuccessful.');
    }
  };

  return (
    <div className="import-resume-container">
      <h2 className="form-title">Import an Existing Resume</h2>

      <div className="import-section">
        <h3>Select File Type</h3>
        <FileTypeSelector onSelectFileType={setFileType} />
      </div>

      {fileType && (
        <div className="import-section">
          <h3>Upload File</h3>
          <FileUpload fileType={fileType} onFileSelect={setSelectedFile} />
        </div>
      )}

      {selectedFile && (
        <div className="import-section">
          <h3>Validate Resume</h3>
          <ValidateResume file={selectedFile} onValidate={setValidationResult} />
        </div>
      )}

      {validationResult && (
        <div className="import-section">
          <h3>Validation Result</h3>
          {validationResult.success ? (
            <div className="success-message">
              <p>Resume validated successfully!</p>
              <p><strong>Name:</strong> {validationResult.data?.name || 'N/A'}</p>
              <p><strong>Email:</strong> {validationResult.data?.email || 'N/A'}</p>
              <p><strong>Phone:</strong> {validationResult.data?.phone || 'N/A'}</p>
              {validationResult.data?.education?.length > 0 ? (
                <div>
                  <strong>Education:</strong>
                  <ul>
                    {validationResult.data.education.map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p><strong>Education:</strong> Not provided</p>
              )}
              {validationResult.rectifiedFields?.length > 0 && (
                <div className="rectified-message">
                  <p><strong>Rectified Fields:</strong></p>
                  <ul>
                    {validationResult.rectifiedFields.map((field, idx) => (
                      <li key={idx}>{field}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button onClick={handleProceed} className="submit-button">
                Proceed to Dashboard
              </button>
            </div>
          ) : (
            <div className="error-message">
              <p>Validation failed: {validationResult.error || 'Unknown error'}</p>
            </div>
          )}
        </div>
      )}

      <div className="button-group">
        <button onClick={() => navigate("/resume-options")} className="back-button">
          Back to Options
        </button>
      </div>
    </div>
  );
};

export default ImportResume;