import React from "react";

const ResumePreview = ({ data }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h3>{data.name}'s Resume</h3>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>City:</strong> {data.city}</p>
      <p><strong>LinkedIn:</strong> {data.linkedin}</p>
      <p><strong>GitHub:</strong> {data.github}</p>
      <p><strong>Objective:</strong> {data.objective}</p>

      <h4>Education</h4>
      <p>{data.education}</p>

      <h4>Skills</h4>
      <p>{data.skills}</p>

      <h4>Certifications</h4>
      <p>{data.certifications}</p>

      <h4>Experience</h4>
      <p>{data.experience}</p>

      <h4>Projects</h4>
      <p>{data.projects}</p>
    </div>
  );
};

export default ResumePreview;
