import React from "react";
import { Link, useLocation } from "react-router-dom"; // For routing
import { menuItems } from "./utils/Routes"
const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation(); // Get current location
  return (
    <aside
      className={`bg-gray-800 w-48 p-2 overflow-y-auto transition-all duration-300 ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <h2 className="text-xl font-bold text-white mb-2">Sidebar</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="text-gray-300">
            <Link
              to={item.path}
              className={`block p-2 rounded-lg text-lg hover:bg-gray-700 ${
                location.pathname === item.path ? "bg-gray-600 text-white" : "" // Apply active style
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;