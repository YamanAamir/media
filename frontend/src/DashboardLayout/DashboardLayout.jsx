
import React from "react";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = ({ userType, children }) => {
  return (
    <div className="flex ">
      <Sidebar userType={userType} />
      <div className="flex-1 p-4 md:ml-64">{children}</div>
    </div>
  );
};

export default DashboardLayout;
