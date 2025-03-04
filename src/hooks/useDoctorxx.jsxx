// useCrud.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";

const useDoctor = (initialFormState, endpoint) => {
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

export default useDoctor;