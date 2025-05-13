// sr// src/api.js
export const submitResume = async (resumeData) => {
  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resumeData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting resume data:", error);
  }
};
