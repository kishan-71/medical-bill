import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex items-start">
        <div className="mb-4">{children}</div>
        <button
            onClick={onClose}
            className="text-gray-400 text-4xl hover:text-gray-200"
          >
            &times;
          </button>
        
          
        </div>
        
      </div>
    </div>
  );
};

export default Modal;