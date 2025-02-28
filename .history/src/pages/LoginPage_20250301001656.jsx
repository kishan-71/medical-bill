import React, { useState } from 'react';
import useLogin from "../hooks/useLogin";
import Form from "../components/Form";

import { initialLoginFormState, LoginFormFields, loginFormButton } from "../constants/AuthConst";

const LoginPage = () => {
    const {loading,  handleChange, handleSubmit,  } = useLogin(initialLoginFormState, "login.php");

    const formFields = LoginFormFields(formData, handleChange);
      const formbuttons = loginFormButton(editItem);

  


};

export default LoginPage;