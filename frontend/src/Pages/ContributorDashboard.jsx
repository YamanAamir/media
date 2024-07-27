// src/Pages/ContributorDashboard.js
import React from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const ContributorDashboard = () => {
  return (
    <DashboardLayout userType="contributor">
      <h1 className="text-2xl font-bold">Contributor Dashboard</h1>
      <p>Contributor-specific content goes here.</p>
    </DashboardLayout>
  );
};

export default ContributorDashboard;
