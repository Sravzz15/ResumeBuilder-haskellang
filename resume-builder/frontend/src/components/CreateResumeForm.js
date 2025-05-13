import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateResumeForm.css'; // Optional: only if you're using CSS

const CreateResumeForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    linkedin: '',
    github: '',
    objective: '',
    education: '',
    skills: '',
    certifications: '',
    experience: '',
    projects: '',
  });

  // Handle changes in any form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // On submit, navigate to resume preview
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/resume-preview', { state: { resumeData: formData } });
  };

  return (
    <div className="create-resume-form">
      <h2>Create a New Resume</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>

        <label>Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <label>City/State:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>

        <label>LinkedIn:
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </label>

        <label>GitHub:
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
          />
        </label>

        <label>Objective:
          <textarea
            name="objective"
            value={formData.objective}
            onChange={handleInputChange}
          />
        </label>

        <label>Education:
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
          />
        </label>

        <label>Skills:
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </label>

        <label>Certifications:
          <input
            type="text"
            name="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
          />
        </label>

        <label>Experience:
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </label>

        <label>Projects:
          <input
            type="text"
            name="projects"
            value={formData.projects}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Create Resume</button>
      </form>
    </div>
  );
};

export default CreateResumeForm;
