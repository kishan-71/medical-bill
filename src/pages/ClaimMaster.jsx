<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import useClaimMaster from "../hooks/useClaimmaster";
import { initialClaimMasterFormState, ClaimMasterFormFields, ClaimMasterFormButton } from "../constants/ClaimMasterConst";

const ClaimMasterPage = () => {
  const { data, formData, loading, selectedFile, handleFileChange, handleSubmit,  } 
  = useClaimMaster(initialClaimMasterFormState,"claimmaster.php");
  const formFields = ClaimMasterFormFields(formData, handleFileChange);
  const formButtons = ClaimMasterFormButton(selectedFile);
  const headers = Object.keys(tableCol);
  const rows = data.map((item) => headers.map((header) => item[tableCol[header]]));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-1 text-white">Claim Master Page</h1>
      <p className="text-gray-300 mb-1">Upload ClaimMaster Excel file</p>
      <div className="flex items-center space-x-4 mb-4">
        <Form onSubmit={handleSubmit} fields={formFields} buttons={formButtons} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-2">Records</h2>
        {loading ? ( <p className="text-white">Loading...</p> ) : data.length === 0 ? 
        ( <p className="text-white">No records found</p> ) : (
          <Table headers={headers} rows={rows} /> )}
      </div>
    </div>
  );
};

export default ClaimMasterPage;
=======
import React from 'react';

function ClaimMaster() {
  return (
    <div className="p-2">
    <h1 className="text-2xl font-bold mb-1 text-white">Claim Master Page</h1>
    <p className="text-gray-300 mb-1">This is the Claim Master page.</p>

    </div>
  );
}

export default ClaimMaster;
>>>>>>> Stashed changes
