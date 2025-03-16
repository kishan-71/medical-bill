<<<<<<< Updated upstream
// useCrud.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";
import { readExcelFile } from "../utils/useXLSX";

const useClaimMaster = (initialFormState, endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await myApi("GET", endpoint);
    setData(response.error ? [] : response.data || []);
    setLoading(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; setSelectedFile(file);
    readExcelFile(file, (data) => { setJsonData(data); setHeaders(Object.keys(data[0])); });
  };

  const handleSubmit = async () => {
    if (jsonData.length === 0) { alert("No data to upload!"); return; }
    try { const response = await apiRequest("POST", "action=upload", jsonData);
      alert(response.data.message);
      if (response.data.success) { fetchRecords(); } 
    } catch (error) { console.error("Error uploading records:", error); }
  };

  return { data, formData, handleChange, loading, selectedFile, handleFileChange, handleSubmit, };
};

export default useClaimMaster;
=======
// useClaim.js
import { useEffect, useState } from 'react';
import {uploadExcelData, fetchData } from '../api/ClaimApi';
import * as XLSX from 'xlsx'; // Import XLSX here

const useClaim = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

     useEffect(() => {
        loadData();
      }, []);

      const loadData = async () => {
        try {
            setLoading(true);
            const response = await myApi("GET", endpoint);
            setData(response.error ? [] : response.data || []);
            setLoading(false);
        } catch (error) {
          console.error("Error loading data:", error);
        }
      };

    const uploadClaims = async (selectedFile) => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        if (!selectedFile) {
            setError("Please select an Excel file.");
            setLoading(false);
            return;
        }

        try {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[worksheetName];
                const excelData = XLSX.utils.sheet_to_json(worksheet);

                try {
                    const response = await uploadExcelData(excelData);
                    setSuccessMessage(response.message || "Claims uploaded successfully!");
                    return response;
                } catch (err) {
                    setError(err.response?.data?.error || "An error occurred during upload.");
                    throw err; // Re-throw the error to be caught in the component
                } finally {
                    setLoading(false);
                }
            };
            reader.readAsArrayBuffer(selectedFile);
        } catch (fileError) {
            console.error('Error processing file:', fileError);
            setError("Error processing the selected file.");
            setLoading(false);
        }
    };

    return { uploadClaims,data, loading, error, successMessage };
};

export default useClaim;
>>>>>>> Stashed changes
