// src/Pages/AdminDashboard.js
import React from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const AdminDashboard = () => {
  return (
    <DashboardLayout userType="admin">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Admin-specific content goes here.</p>
    </DashboardLayout>
  );
};

export default AdminDashboard;
