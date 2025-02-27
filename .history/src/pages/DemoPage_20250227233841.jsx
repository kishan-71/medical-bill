// DemoPage.js
import React from "react";
import Modal from "../components/Modal";
import useDemo from "../hooks/useDemo";

import { cFormFields, tableCol, getTableActions, formButton } from "../constants/DemoConst";
import Form from "../components/Form";
import Table from "../components/Table";

const DemoPage = () => {
  // Define initial form state
  const fieldsName = {
    name: "",
    email: "",
    mobile: "",
    dob: "",
  };

  // Use the useDemo hook with initial form state
  const {
    data,
    editItem,
    formData,
    loading,
    isModalOpen,
    loadData,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    closeModal,
  } = useDemo(fieldsName);

  // Generate form fields dynamically
  const formFields = cFormFields(formData, handleChange);

  // Generate form buttons dynamically
  const buttons = formButton(editItem);

  // Generate table headers and rows dynamically
  const headers = Object.keys(tableCol);
  const rows = data.map((item) => headers.map((header) => item[tableCol[header]]));

  // Generate table actions dynamically
  const actions = getTableActions(handleEdit, handleDelete);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 text-white">Demo Page</h1>
      <p className="text-gray-300 text-sl">This is the Demo page.</p>

      {/* Add User Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="flex items-center space-x-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-lg"
        >
           Add User
        </button>
      </div>

      {/* Modal for Form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            {editItem ? "Edit Record" : "Add Record"}
          </h2>
          <Form onSubmit={handleSubmit} fields={formFields} buttons={buttons} />
        </div>
      </Modal>

      {/* Table for Data */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-white">Records</h2>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <Table headers={headers} rows={rows} actions={actions} />
        )}
      </div>
    </div>
  );
};

export default DemoPage;