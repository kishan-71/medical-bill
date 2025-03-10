// DoctorConst.js
export const initialLoginFormState = {username: "", password: "", };
export const LoginFormFields = (formData, onChange) => [
    {
      label: "username",
      type: "text",
      name: "username",
      value: formData.username,
      onChange,
      placeholder: "Enter User ID",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: formData.password,
      onChange,
      placeholder: "Enter Password",
    },
  ];
  
  export const loginFormButton = () => [
    {
      type: "submit",
      label: "Login",
      className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",
    },
  ];