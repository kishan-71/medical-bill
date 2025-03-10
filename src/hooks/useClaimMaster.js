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