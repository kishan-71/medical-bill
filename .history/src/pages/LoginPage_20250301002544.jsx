import React, { useState } from 'react';
import useLogin from "../hooks/useLogin";
import Form from "../components/Form";

import { initialLoginFormState, LoginFormFields, loginFormButton } from "../constants/AuthConst";

const LoginPage = () => {
    const {formData, loading,  handleChange, handleSubmit,  } = useLogin(initialLoginFormState, "login.php");

    const formFields = LoginFormFields(formData, handleChange);
    const formButtons = loginFormButton();

    return(
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="w-full max-w-md mx-auto py-2 px-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold m-2 text-white">Login Form</h2>
                <Form onSubmit={handleSubmit} fields={formFields} buttons={formButtons} />
            </div>
        </div>
    );
};

export default LoginPage;