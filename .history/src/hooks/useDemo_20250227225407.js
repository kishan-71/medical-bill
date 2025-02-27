// useDemo.js
import { useState, useEffect } from "react";

const useDemo = (initialFormState) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Update formData when editItem changes
  useEffect(() => {
    setFormData(editItem || initialFormState);
  }, [editItem]);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetchData();
      setData(response);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/demo.php");
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const createData = async (data) => {
    try {
      const response = await fetch("/demo.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating data:", error);
      throw error;
    }
  };

  const updateData = async (id, data) => {
    try {
      const response = await fetch(`/demo.php?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/demo.php?id=${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    openModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (editItem) {
        const updatedItem = await updateData(editItem.id, formData);
        setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      } else {
        const newItem = await createData(formData);
        setData([...data, newItem]);
      }
      setFormData(initialFormState);
      closeModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteData(id);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
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