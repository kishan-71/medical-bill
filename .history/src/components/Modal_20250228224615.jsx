import React from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex items-start">
        {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-400 text-4xl hover:text-gray-200 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;