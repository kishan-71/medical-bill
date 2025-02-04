import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    valueGetter: (params) => {
      if (!params || !params.row) { // Check if params or params.row is undefined
        return ''; // Return an empty string or a suitable default value
      }
      return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
];

export default function BasicDataGrid() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
      const firstName = row.firstName || '';
      const lastName = row.lastName || '';
      return (
        firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        lastName.toLowerCase().includes(searchText.toLowerCase())
      );
    });


  return (
    <div style={{ height: 400, width: '100%' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          // Handle selection changes
        }}
      />
    </div>
  );
}