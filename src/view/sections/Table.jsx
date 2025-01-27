// src/sections/Table.jsx
import React from 'react';

function Table({ data }) {
    
  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
            console.log("Row value :", row),
          <tr key={index}>
            <td>{row['Claim No']}</td>
            <td>{row['Employee Number']}</td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;