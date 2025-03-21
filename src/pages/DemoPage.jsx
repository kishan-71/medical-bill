// DemoPage.jsx
import React from "react";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Table from "../components/Table";
import DataView from "../components/DataView";
import DataForm from "../components/DataForm";
import { IoMdAdd } from "react-icons/io";
import { initialFormState, cFormFields, tableCol, tableActions, formButton } from "../constants/DemoConst";
import useCrud from "../hooks/useCRUD";


const DemoPage = () => {

  const { 
    data, editItem, viewItem, formData, loading, 
    isModalOpen, isDataViewOpen, isDataFormOpen, 
    openModal, closeModal, closeDataView, closeDataForm, 
    handleChange, handleSubmit, handleEdit, handleDelete, handleDataView, handleDataForm 
  } = useCrud(initialFormState, "demo.php");
  
  
  const formFields = cFormFields(formData, handleChange);
  const buttons = formButton(editItem);
  const headers = Object.keys(tableCol);
  const rows = data.map((item) => headers.map((header) => item[tableCol[header]]));
  const actions = tableActions(
    (rowIndex) => handleEdit(data[rowIndex]), // Pass the full item
    (rowIndex) => handleDelete(data[rowIndex].id), // Pass the item's ID
    (rowIndex) => handleDataView(data[rowIndex]), // Pass the full item
    (rowIndex) => handleDataForm(data[rowIndex]) // DataForm View Action // Reuse Edit logic for Form View
  );

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-1 text-white">Demo Page</h1>
      <p className="text-gray-300 mb-1">This is the Demo page.</p>

      <div className="flex justify-end mb-3 items-center">
        <button onClick={openModal} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <IoMdAdd className="inline-block mr-1" />Add User</button>
      </div>
      <Modal isOpen={isDataViewOpen} onClose={closeDataView} title="View Details">
        {viewItem && <DataView title="User Details" data={viewItem} />}
      </Modal>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={editItem ? "Edit Record" : "Add Record"} >
          <Form onSubmit={handleSubmit} fields={formFields} buttons={buttons} />
      </Modal>

      <Modal isOpen={isDataFormOpen} onClose={closeDataForm} title="User Details & Form">
        {viewItem && (
          <DataForm 
            viewTitle="User Details" 
            viewData={viewItem}  // Read-only details in DataView
            formTitle="Edit Details"
            formFields={formFields}  // Editable fields in Form
            handleSubmit={handleSubmit} 
            buttons={buttons} 
          />
        )}
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