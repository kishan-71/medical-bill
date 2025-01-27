// src/views/MedicalBill.jsx
import React, { useState } from 'react';
import Upload from './sections/Upload';
import Table from './sections/Table';


function MedicalBill() {
  const [tableData, setTableData] = useState([]);

  const handleDataReceived = (data) => {
    setTableData(data);
  };

  return (
    <div>
      <h1>Excel file data view </h1>
      <Upload onDataReceived={handleDataReceived} />
      {tableData.length > 0 && <Table data={tableData} />}
    </div>
  );
}

export default MedicalBill;