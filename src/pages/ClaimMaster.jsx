import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import DataTable from "../components/DataTable";
import useClaimMaster from "../hooks/useClaimmaster";
import { cInitialFormState, cFormFields, cFormButton,  cTableCol, } from "../constants/ClaimMasterConst";

const ClaimMasterPage = () => {
  const { data, formData, loading, selectedFile, handleFileChange, handleSubmit,  } 
  = useClaimMaster(cInitialFormState,"claim_master.php");
  const formFields = cFormFields(formData, handleFileChange);
  const formButtons = cFormButton(selectedFile);
  const headers = Object.keys(cTableCol);
  const rows = data.map((item) => headers.map((header) => item[cTableCol[header]]));

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-1 text-white">Claim Master Page</h1>
      <p className="text-gray-300 mb-1">Upload ClaimMaster Excel file</p>
      <div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-md">
        <Form onSubmit={handleSubmit} fields={formFields} buttons={formButtons} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-2">Records</h2>
        {loading ? ( <p className="text-white">Loading...</p> ) : data.length === 0 ? 
        ( <p className="text-white">No records found</p> ) : (
          <DataTable headers={headers} rows={rows} /> )}
      </div>
    </div>
  );
};

export default ClaimMasterPage;
