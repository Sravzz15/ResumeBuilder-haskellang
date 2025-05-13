// src/api.js

// Send resume to /submit endpoint
export const submitResume = async (resumeData) => {
  try {
    const response = await fetch("http://localhost:3001/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumeData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit resume");
    }

    // Use .text() because backend returns plain text (not JSON)
    const data = await response.text(); // e.g., "Resume saved to backend!"
    return data;
  } catch (error) {
    console.error("Error submitting resume:", error);
    throw error;
  }
};

// Send resume to /api/resume (log to console)
export const saveResumeAPI = async (resumeData) => {
  try {
    const response = await fetch("http://localhost:3001/api/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumeData),
    });

    if (!response.ok) {
      throw new Error("Failed to save resume");
    }

    // This endpoint returns JSON
    return await response.json();
  } catch (error) {
    console.error("Error saving resume:", error);
    throw error;
  }
};

// Add sendResumeData to avoid errors in ResumeForm.js
export const sendResumeData = async (resumeData) => {
  try {
    const response = await fetch("http://localhost:3001/api/send-resume", { // Corrected URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumeData),
    });

    if (!response.ok) {
      throw new Error("Failed to send resume to backend"); // More generic error message
    }

    // Assuming this endpoint returns JSON; adjust if it returns text
    return await response.json();
  } catch (error) {
    console.error("Error sending resume to backend:", error);
    throw error;
  }
};