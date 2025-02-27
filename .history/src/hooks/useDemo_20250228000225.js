// useDemo.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";

/**
 * Custom hook for managing demo data and form state
 * @param {Object} initialFormState - Initial state for the form
 * @returns {Object} State and handlers for demo functionality
 */
const useDemo = (initialFormState) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setFormData(editItem || initialFormState);
  }, [editItem, initialFormState]);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await myApi("GET", "demo.php");
      if (response.error) throw new Error(response.error);
      setData(response.data || []);
    } catch (error) {
      console.error("Failed to load data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const createData = async (data) => {
    const response = await myApi("POST", "demo.php", { data });
    if (response.error) throw new Error(response.error);
    return response.data;
  };

  const updateData = async (id, data) => {
    const response = await myApi("PUT", `demo.php?id=${id}`, { data });
    if (response.error) throw new Error(response.error);
    return response.data;
  };

  const deleteData = async (id) => {
    const response = await myApi("DELETE", `demo.php?id=${id}`);
    if (response.error) throw new Error(response.error);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (editItem) {
        const updatedItem = await updateData(editItem.id, formData);
        setData((prev) =>
          prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
      } else {
        const newItem = await createData(formData);
        setData((prev) => [...prev, newItem]);
      }
      closeModal();
    } catch (error) {
      console.error("Failed to submit data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteData(id);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete data:", error.message);
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
    loadData,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    closeModal,
  };
};

export default useDemo;