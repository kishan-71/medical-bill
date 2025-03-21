import { FaHome } from "react-icons/fa";
// DemoConst.js
export const initialFormState = { name: "", email: "", mobile: "", dob: "", };
/**
 * Form fields configuration for the demo form
 * @param {Object} formData - Current form state
 * @param {Function} onChange - Handler for form input changes
 * @returns {Array} Array of field configurations
 */
export const cFormFields = (formData, onChange) => [
  {
    label: "Name",
    type: "text",
    name: "name",
    value: formData.name,
    onChange,
    placeholder: "Enter name",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    value: formData.email,
    onChange,
    placeholder: "Enter email",
  },
  {
    label: "Mobile",
    type: "tel",
    name: "mobile",
    value: formData.mobile,
    onChange,
    placeholder: "Enter mobile number",
  },
  {
    label: "Date of Birth",
    type: "date",
    name: "dob",
    value: formData.dob,
    onChange,
  },
];

/**
 * Table column mapping for headers to data keys
 */
export const tableCol = {
  Name: "name",
  Email: "email",
  Mobile: "mobile",
  "Date of Birth": "dob",
};

/**
 * Table actions configuration
 * @param {Function} onEdit - Handler for edit action
 * @param {Function} onDelete - Handler for delete action
 * @returns {Array} Array of action configurations
 */
export const tableActions = (onEdit, onDelete) => [
  {
    label: <FaHome size={18} />,
    action: onEdit,
    className: "bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded",
  },
  {
    label: "Delete1",
    action: onDelete,
    className: "bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded",
  },
];

/**
 * Form button configuration
 * @param {Object|null} editItem - Item being edited, if any
 * @returns {Array} Array of button configurations
 */
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