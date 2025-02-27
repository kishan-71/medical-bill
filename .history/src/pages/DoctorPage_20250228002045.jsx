// DoctorPage.jsx
import React from "react";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Table from "../components/Table";
import useCrud from "../hooks/useDoctor";
import { cDoctorFields, doctorTableCol, doctorTableActions, doctorFormButton } from "../constants/DoctorConst";

const initialFormState = {
  name: "",
  degree: "",
};

const DoctorPage = () => {
  const {
    data,
    editItem,
    formData,
    loading,
    isModalOpen,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    closeModal,
  } = useCrud(initialFormState, "doctor.php");

  const formFields = cDoctorFields(formData, handleChange);
  const buttons = doctorFormButton(editItem);
  const headers = Object.keys(doctorTableCol);
  const rows = data.map((item) => headers.map((header) => item[doctorTableCol[header]]));
  const actions = doctorTableActions(
    (rowIndex) => handleEdit(data[rowIndex]),
    (rowIndex) => handleDelete(data[rowIndex].id)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-white">Doctor Page</h1>
      <p className="text-gray-300 mb-4">Manage doctor records.</p>

      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Doctor
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            {editItem ? "Edit Doctor" : "Add Doctor"}
          </h2>
          <Form onSubmit={handleSubmit} fields={formFields} buttons={buttons} />
        </div>
      </Modal>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-2">Doctors</h2>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-white">No doctors found.</p>
        ) : (
          <Table headers={headers} rows={rows} actions={actions} />
        )}
      </div>
    </div>
  );
};

export default DoctorPage;