// useCrud.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";

const useCrud = (initialFormState, endpoint) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  useEffect(() => { loadData(); }, []);
  useEffect(() => { setFormData(editItem || initialFormState); }, [editItem, initialFormState]);

  const loadData = async () => {
    setLoading(true);
    const response = await myApi("GET", endpoint);
    setData(response.error ? [] : response.data || []);
    setLoading(false);
  };

  // ... (rest of the CRUD logic remains the same)

  return {
    data,
    editItem,
    formData,
    loading,
    isModalOpen,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    closeModal,
  };
};

export default useCrud;