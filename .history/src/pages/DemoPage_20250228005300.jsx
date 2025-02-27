// DemoPage.jsx
import React from "react";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Table from "../components/Table";
import { cFormFields, tableCol, tableActions, formButton } from "../constants/DemoConst";

const { data, editItem, formData, loading, isModalOpen,openModal, closeModal, 
  handleChange, handleSubmit, handleEdit, handleDelete, 
} = useCrud({ name: "", email: "", mobile: "", dob: "" }, "demo.php");

const DemoPage = () => {

  const formFields = cFormFields(formData, handleChange);
  const buttons = formButton(editItem);
  const headers = Object.keys(tableCol);
  const rows = data.map((item) => headers.map((header) => item[tableCol[header]]));
  const actions = tableActions(
    (rowIndex) => handleEdit(data[rowIndex]), // Pass the full item
    (rowIndex) => handleDelete(data[rowIndex].id) // Pass the item's ID
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-white">Demo Page</h1>
      <p className="text-gray-300 mb-4">This is the Demo page.</p>

      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            {editItem ? "Edit Record" : "Add Record"}
          </h2>
          <Form onSubmit={handleSubmit} fields={formFields} buttons={buttons} />
        </div>
      </Modal>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-2">Records</h2>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-white">No records found.</p>
        ) : (
          <Table headers={headers} rows={rows} actions={actions} />
        )}
      </div>
    </div>
  );
};

export default DemoPage;