import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import Footer from "./sections/Footer";


const LayoutPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <Outlet /> 
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPage;