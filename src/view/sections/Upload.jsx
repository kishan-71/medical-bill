// src/sections/Upload.jsx
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function Upload( {onDataReceived }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {

    try {
        
      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryString = e.target.result;
        const workbook = XLSX.read(binaryString, { type: 'binary' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        onDataReceived(data);

      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };

  return (
    <div>
      <input  type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} >
        Upload</button>
    </div>
  );
}

export default Upload;



