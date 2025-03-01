// useCrud.js
import { useState, useEffect } from "react";
import { myApi } from "../utils/Api";

const useLogin = (initialFormState, endpoint) => {
  const [formData, setFormData] = useState(initialFormState);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);



  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLogin = async (e) => {
      e.preventDefault();
      try {         
          const response = await myApi("POST", endpoint, { data:formData });
          if (response.error) throw response.error;
          setUser(response.data.user); // Assuming your API returns user data in response.data.user
          localStorage.setItem('user', JSON.stringify(response.data.user));
          console.log(response.data,"useLogin"); //null 'user'
          // You might want to redirect the user here after successful login
      } catch (err) { setError(err.message || "Login failed"); // Consistent error handling
      } 
    }
  
  return {
    formData,
    handleLogin,
    handleChange,
  };
};

export default useLogin;