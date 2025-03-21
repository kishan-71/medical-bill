import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import Footer from "./sections/Footer";


const LayoutPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); };
  const location = useLocation(); // Get current location

  return (
    <div className="flex flex-col h-screen bg-gray-900 overflow-hidden">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        {location.pathname==="/login" ? null : <Sidebar isSidebarOpen={isSidebarOpen} /> } 
        <main className="flex-1 min-h-0 overflow-auto p-2 custom-scrollbar">
          <div className="container mx-auto">
            <Outlet /> 
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPage;