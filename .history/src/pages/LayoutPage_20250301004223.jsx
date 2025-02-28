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
    <div className="flex flex-col h-screen bg-gray-900">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 overflow-hidden"> {alert(location.pathname)}
       {location.pathname=="/login" ? <Sidebar isSidebarOpen={isSidebarOpen} /> : null} 
        <main className="flex-grow p-1">
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