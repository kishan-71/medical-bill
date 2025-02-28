import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import Loading from "../pages/sections/Loading";
import ErrorPage from "../pages/sections/ErrorPage";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/DemoPage";

const LayoutWithOutlet = () => { return ( <LayoutPage> <Outlet /> </LayoutPage> ); };

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<LayoutWithOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="demo-page" element={<DemoPage />} />
            <Route path="doctor-page" element={<DoctorsPage />} />
          </Route>
        
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
