import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/DemoPage";
import DoctorPage from "../pages/DoctorsPage";


const LayoutWithOutlet = () => { return ( <LayoutPage> <Outlet /> </LayoutPage> ); };

const Routes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<LayoutWithOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="demo-page" element={<DemoPage />} />
            <Route path="doctor-page" element={<DoctorPage />} />
          </Route>
        
      </Routes>
    </AuthProvider>
  );
};

export default Routes;
