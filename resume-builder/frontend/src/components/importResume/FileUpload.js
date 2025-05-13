import React from 'react';

const FileUpload = ({ fileType, onFileSelect }) => {
  const handleFileChange = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        accept={fileType === 'pdf' ? '.pdf' : fileType === 'doc' ? '.doc' : '.docx'}
        onChange={handleFileChange}
        className="input-field"
      />
    </div>
  );
};

export default FileUpload;