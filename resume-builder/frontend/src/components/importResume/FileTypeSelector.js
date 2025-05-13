import React from 'react';

const FileTypeSelector = ({ onSelectFileType }) => {
  const handleChange = (e) => {
    onSelectFileType(e.target.value);
  };

  return (
    <div className="file-type-selector">
      <select className="input-field" onChange={handleChange}>
        <option value="">Select file type</option>
        <option value="pdf">PDF</option>
        <option value="doc">DOC</option>
        <option value="docx">DOCX</option>
      </select>
    </div>
  );
};

export default FileTypeSelector;