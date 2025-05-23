import React from "react";
import { FaBars, FaHome, FaAlignRight, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Header = ({ toggleSidebar, isSidebarOpen }) => {

  const navigate = useNavigate(); // Initialize navigate function

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-lg p-3 flex items-center justify-between">
<div className="flex items-center space-x-4">
  {location.pathname === "/medical-bill/login" 
    ? null 
    : <button onClick={toggleSidebar}
        className="text-white hover:text-gray-300 focus:outline-none" >
        {isSidebarOpen ? <FaAlignRight size={24} /> : <FaBars size={24} />}
      </button> 
  }
  <h1 className="text-2xl font-bold text-white">Medial Bill</h1> 
</div> 

{location.pathname === "/medical-bill/login" ? 
<button onClick={() => navigate("/")} 
  className="flex items-center space-x-2 bg-green-600 text-white px-2 py-1 rounded-lg hover:bg-green-700 transition-all" >
  <FaHome size={18} />  <span>Home Page</span>  </button> 
: 
<button onClick={() => navigate("/login")}  
  className="flex items-center space-x-2 bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-all" >
  <FaSignOutAlt size={18} />  <span>Sign Out</span>  </button>}
      
    </header>
  );
};

export default Header;