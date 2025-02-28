// useCrud.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";

const useLogin = (initialFormState, endpoint) => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  


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

  return {
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;