import React from "react";
import { Navbar } from "../Components/Navbar";
import  Footer  from "../Components/Footer"
import { Outlet } from "react-router-dom";
// import Sidebar from "../Components/Sidebar";

const WebsiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
