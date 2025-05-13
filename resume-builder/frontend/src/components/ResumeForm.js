import React, { useState } from "react";
import ResumePreview from "./ResumePreview"; // Make sure this file exists in the same folder

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",
    github: "",
    objective: "",
    education: "",
    skills: "",
    certifications: "",
    experience: "",
    projects: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPreview(true);
      } else {
        alert("Failed to submit resume. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting resume:", error);
      alert("An error occurred while submitting the resume.");
    }
  };

  return (
    <div className="form-container" style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Create Your Resume</h2>

      {!showPreview ? (
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([field, value]) => (
            <label key={field} style={{ display: "block", marginBottom: "15px" }}>
              <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong><br />
              {["objective", "education", "skills", "certifications", "experience", "projects"].includes(field) ? (
                <textarea
                  name={field}
                  value={value}
                  onChange={handleChange}
                  style={{ width: "100%", height: "60px" }}
                  required={["name", "email"].includes(field)}
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={value}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required={["name", "email"].includes(field)}
                />
              )}
            </label>
          ))}
          <button type="submit" style={{ marginTop: "10px" }}>Preview Resume</button>
        </form>
      ) : (
        <div>
          <ResumePreview data={formData} />
          <button style={{ marginTop: "20px" }} onClick={() => setShowPreview(false)}>
            Edit Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
