// DoctorConst.js

export const cDoctorFields = (formData, onChange) => [
    {
      label: "Name",
      type: "text",
      name: "name",
      value: formData.name,
      onChange,
      placeholder: "Enter doctor's name",
    },
    {
      label: "Degree",
      type: "text",
      name: "degree",
      value: formData.degree,
      onChange,
      placeholder: "Enter degree (e.g., MD, MBBS)",
    },
  ];
  
  export const doctorTableCol = {
    Name: "name",
    Degree: "degree",
  };
  
  export const doctorTableActions = (onEdit, onDelete) => [
    { label: "Edit", action: onEdit, className: "bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded" },
    { label: "Delete", action: onDelete, className: "bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded" },
  ];
  
  export const doctorFormButton = (editItem) => [
    {
      type: "submit",
      label: editItem ? "Update" : "Submit",
      className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",
    },
    {
      type: "reset",
      label: "Reset",
      className: "bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded",
    },
  ];