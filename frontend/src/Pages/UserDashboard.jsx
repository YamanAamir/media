// src/Pages/UserDashboard.js
import React from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const UserDashboard = () => {
  return (
    <DashboardLayout userType="user">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p>User-specific content goes here.</p>
    </DashboardLayout>
  );
};

export default UserDashboard;
