import React from "react";
import DataView from "./DataView";
import Form from "./Form";

const DataForm = ({ viewTitle, viewData, formTitle, formFields, handleSubmit, buttons }) => {
  return (
    <div className="bg-gray-600 p-6 rounded-lg shadow-md text-white flex">
      {/* Left Side: DataView */}
      <div className="w-1/2 pr-4">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">{viewTitle}</h2>
        <DataView title="" data={viewData} />
      </div>

      {/* Vertical Line */}
      <div className="w-px bg-gray-500 mx-4"></div>

      {/* Right Side: Form */}
      <div className="w-1/2 pl-4">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">{formTitle}</h2>
        <Form onSubmit={handleSubmit} fields={formFields} buttons={buttons} />
      </div>
    </div>
  );
};

export default DataForm;
