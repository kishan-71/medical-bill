import React from "react";
import { Link } from "react-router-dom"; // For routing

const Sidebar = ({ isSidebarOpen }) => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Demo Page", path: "/demo-page" },
    { name: "Doctors", path: "/doctor-page" },
    { name: "Bill Register", path: "/" },
    { name: "Doctor Forwarding", path: "/" },
    { name: "Section Amount", path: "/" },
  ];

  return (
    <aside
      className={`bg-gray-800 w-48 p-2 overflow-y-auto transition-all duration-300 ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <h2 className="text-xl font-bold text-white mb-2">Sidebar</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="text-gray-300 hover:text-white">
            <Link
              to={item.path}
              className="block p-1 rounded-lg text-lg hover:bg-gray-700"
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