import React from "react";

const DataView = ({ title, data }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">{title}</h2>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value], index) => (
          <div key={index} className="border-b border-gray-500">
            <span className="font-semibold capitalize">{key.replace(/_/g, " ")}: </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataView;
