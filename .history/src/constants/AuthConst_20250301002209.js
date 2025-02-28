// DoctorConst.js
export const initialLoginFormState = {userId: "", password: "", };
export const LoginFormFields = (formData, onChange) => [
    {
      label: "User ID",
      type: "text",
      name: "name",
      value: formData.name,
      onChange,
      placeholder: "Enter User ID",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: formData.degree,
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