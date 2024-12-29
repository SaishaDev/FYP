import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/home/Home";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import OwnerRegisterPage from "./pages/owner/Register";
import OwnerLoginPage from "./pages/owner/Login";
import OwnerDashboardPage from "./pages/owner/Dashboard";
import AdminDashboardPage from "./pages/admin/AdminDashboard";
import NotFoundPage from "./pages/NotFoundPage"; // For 404

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

        {/* Owner Routes */}
        <Route path="/owner/register" element={<OwnerRegisterPage />} />
        <Route path="/owner/login" element={<OwnerLoginPage />} />
        <Route path="/owner/dashboard" element={<OwnerDashboardPage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
