import React, { useState } from 'react';
import useLogin from "../hooks/useLogin";
import Form from "../components/Form";

import { initialLoginFormState, LoginFormFields, loginFormButton } from "../constants/AuthConst";

const LoginPage = () => {
    const {loading,  handleChange, handleSubmit,  } = useLogin(initialLoginFormState, "login.php");

    const formFields = LoginFormFields(formData, handleChange);
    const formbuttons = loginFormButton(editItem);

  

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-2"> {/* Reduced space-y */}
          <h2 className="text-2xl font-bold text-white mb-4">Login</h2> {/* Reduced mb */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="text" // Changed type to "text" as "name" is not a valid input type. Assuming email or username input
              value={name}
              onChange={(e) => setName(e.target.value)} // Corrected to setName
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;