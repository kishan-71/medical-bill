import React from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-70 ">
      <div className="bg-gray-800 p-2 rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] flex flex-col overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center">
        {title && <h2 className="text-2xl font-bold mb-1 text-white">{title}</h2>}
          <button onClick={onClose} className="text-gray-400 text-5xl hover:text-gray-200" >
            &times; </button>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;