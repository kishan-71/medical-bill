import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/DemoPage";
import DoctorPage from "../pages/DoctorPage";
import LoginPage from "../pages/LoginPage";
import ClaimMaster from "../pages/ClaimMaster";
import ClaimRegister from "../pages/ClaimRegister";


const SidebarItems = [
  { name: "Demo Page", path: "/demo-page" },
  { name: "Home", path: "/" },
  { name: "Claim Master", path: "/claim-master" },
  { name: "Doctors", path: "/doctor-page" },
  { name: "Claim Register", path: "/claim-register" },
  { name: "Doctor Forwarding", path: "/" },
  { name: "Section Amount", path: "/" },
  { name: "Login", path: "/login" },
];

const MyRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<LayoutWithOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="claim-master" element={<ClaimMaster />} />
            <Route path="demo-page" element={<DemoPage />} />
            <Route path="claim-register" element={<ClaimRegister />} />
            <Route path="doctor-page" element={<DoctorPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
      </Routes>
  );
};

const LayoutWithOutlet = () => { return ( <LayoutPage> <Outlet /> </LayoutPage> ); };

export {SidebarItems, MyRoutes} 
