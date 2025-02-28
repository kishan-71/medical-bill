import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import Loading from "../pages/sections/Loading";
import ErrorPage from "../pages/sections/ErrorPage";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/DemoPage";


const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<AuthCheck />}>
          <Route path="/" element={<LayoutWithOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="demo" element={<DemoPage />} />
            <Route path="claim-master" element={<ClaimMasterPage />} />
            <Route path="doctors" element={<DoctorsPage />} />
            <Route path="bill-register" element={<BillRegisterPage />} />
            <Route path="doctor-forwarding" element={<DoctorForwardingPage />} />
            <Route path="section-amount" element={<SectionAmountPage />} />
          </Route>
        </Route>
        <Route path="/user" element={<PublicRoute><UserPage /></PublicRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
};

const AuthCheck = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
      if (!isLoading && !user) {
          navigate("/user", { replace: true });
      }
  }, [isLoading, user, navigate]);

  return isLoading ? <Loading /> : user ? <Outlet /> : null; // Simplified
};

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" replace /> : children; // Simplified
};


const LayoutWithOutlet = () => {
  return (
    <LayoutPage>
      <Outlet />
    </LayoutPage>
  );
};

export default AppRoutes;
