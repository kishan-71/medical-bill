// Doctor.js

// Form Fields Configuration
export const fields = (formData, onChange) => [
    {
      label: "Name",
      type: "text",
      name: "name",
      value: formData.name,
      onChange: onChange,
      placeholder: "Enter name",
    },
    {
        label: "Degree",
        type: "text",
        name: "degree",
        value: formData.name,
        onChange: onChange,
        placeholder: "Enter name",
      },
  ];
  // Form Buttons
  export const formButton = (editItem) => [
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
  
  // Table Column Mapping
  export const tableCol = {
    Name: "name",
    Degree: "degree",
  };
  // Table Actions (Generic for All Tables)
  export const getTableActions = (onEdit, onDelete, onView) => [
    {
      label: "Edit",
      action: onEdit,
      className: "bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded",
    },
    {
      label: "Delete",
      action: onDelete,
      className: "bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded",
    },
    {
      label: "View",
      action: onView,
      className: "bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded",
    },
  ];