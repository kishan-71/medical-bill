import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/DemoPage";
import DoctorPage from "../pages/DoctorPage";
import LoginPage from "../pages/LoginPage";
import ClaimMaster from "../pages/ClaimMaster";


const SidebarItems = [
  { name: "Home", path: "/" },
  { name: "Claim Master", path: "/claim-master" },
  { name: "Demo Page", path: "/demo-page" },
  { name: "Doctors", path: "/doctor-page" },
  { name: "Bill Register", path: "/" },
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
            <Route path="doctor-page" element={<DoctorPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
      </Routes>
  );
};

const LayoutWithOutlet = () => { return ( <LayoutPage> <Outlet /> </LayoutPage> ); };

export {SidebarItems, MyRoutes} 
