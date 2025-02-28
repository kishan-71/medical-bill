import React from "react";
import { FaBars, FaAlignRight, FaSignOutAlt } from "react-icons/fa";

const Header = ({ toggleSidebar, isSidebarOpen }) => {

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-lg p-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          {isSidebarOpen ? <FaAlignRight size={24} /> : <FaBars size={24} />}
        </button>
        <h1 className="text-2xl font-bold text-white">Demo CRUD</h1>
      </div>
      
        <button
          className="flex items-center space-x-2 bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-all"
        >
          <FaSignOutAlt size={18} />
          <span>Sign Out</span>
        </button>

    </header>
  );
};

export default Header;