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
  const [headers, setHeaders] = useState([]);


  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await myApi("GET", endpoint);
    setData(response.error ? [] : response.data.data || []);
    setLoading(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; setSelectedFile(file);
    readExcelFile(file, (data) => { setJsonData(data); setHeaders(Object.keys(data[0])); });
  };

  const   handleSubmit = async (event) => {
    if (event) event.preventDefault(); // Prevent default form submission
    if (jsonData.length === 0) { alert("No data to upload!"); return; }
    console.log("useClaimMaster:jsondata = ",jsonData);
    try { 
      const response = await myApi("POST", endpoint, { data: jsonData });
      console.log("useClaimMaster responce=",response);
      if (response.data.success) { loadData(); } 
    } catch (error) { console.error("Error uploading records:", error); }
  };

  return { data, formData, handleChange, loading, selectedFile, handleFileChange, handleSubmit, };
};

export default useClaimMaster;