// useCrud.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";

const useCrud = (initialFormState, endpoint) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDataViewOpen, setIsDataViewOpen] = useState(false);
  const [isDataFormOpen, setIsDataFormOpen] = useState(false);
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null);
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

  
  const createData = async (data) => {
    const response = await myApi("POST", endpoint, { data });
    if (response.error) throw response.error;
    return response.data;
  };

  const updateData = async (id, data) => {
    const response = await myApi("PUT", `${endpoint}?id=${id}`, { data });
    if (response.error) throw response.error;
    return response.data;
  };

  const deleteData = async (id) => {
    const response = await myApi("DELETE", `${endpoint}?id=${id}`);
    if (response.error) throw response.error;
    return response.data;
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData(initialFormState);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    openModal();
  };

  const handleDataView = (item) => {
    setViewItem(item);
    setIsDataViewOpen(true);
  };

  const closeDataView = () => {
    setIsDataViewOpen(false);
    setViewItem(null);
  };

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = editItem
        ? await updateData(editItem.id, formData)
        : await createData(formData);
      setData((prev) => editItem
        ? prev.map((item) => (item.id === result.id ? result : item))
        : [...prev, result]);
      closeModal();
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteData(id);
      setData((prev) => prev.filter((item) => item.id !== id));
    } finally {
      setLoading(false);
    }
  };

  const handleDataForm = (item) => {
    setViewItem(item);
    setEditItem(item); // Pre-fill form fields for editing
    setIsDataFormOpen(true);
  };
  
  const closeDataForm = () => {
    setIsDataFormOpen(false);
    setViewItem(null);
    setEditItem(null);
  };

  return {
    data,
    editItem,
    viewItem,
    formData,
    loading,
    isModalOpen,
    isDataViewOpen,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDataView,
    handleDelete,
    openModal,
    closeModal,
    closeDataView,
    isDataFormOpen,
  handleDataForm,
  closeDataForm,
  };
};

export default useCrud;