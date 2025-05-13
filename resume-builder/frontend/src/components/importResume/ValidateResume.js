import React, { useEffect } from 'react';

const ValidateResume = ({ file, onValidate }) => {
  useEffect(() => {
    if (file) {
      // Simulate resume validation logic
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        onValidate({
          success: false,
          error: 'Invalid file type. Please upload a PDF, DOC, or DOCX file.',
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        onValidate({
          success: false,
          error: 'File size exceeds 5MB. Please upload a smaller file.',
        });
        return;
      }

      // Simulate successful validation with mock data
      onValidate({
        success: true,
        data: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          education: ['BSc Computer Science', 'MSc Data Science'],
        },
        rectifiedFields: ['Email format corrected', 'Phone number standardized'],
      });
    }
  }, [file, onValidate]);

  return null; // This component doesn't render anything; it just handles validation
};

export default ValidateResume;