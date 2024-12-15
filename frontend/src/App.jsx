import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SurvivalGuide from "./pages/SurvivalGuide";
import ResourceTrading from "./pages/ResourceTrading";

export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
      <Route path="/survival-guide" element={<SurvivalGuide />} />
      <Route path="/resource-trading" element={<ResourceTrading />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
