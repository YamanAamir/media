import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const ContributorDashboardLayout = ({ userType }) => {
  return (
    <div className="flex h-screen">
      <Sidebar userType={userType} />
      <main className="flex-1 xl:pl-64 mx-2 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ContributorDashboardLayout;
