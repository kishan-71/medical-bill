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
            <Route path="demo-page" element={<DemoPage />} />
            <Route path="doctor-page" element={<DoctorsPage />} />
          </Route>
        </Route>
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
