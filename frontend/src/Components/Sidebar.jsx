// src/components/Sidebar.js
import React, { useState } from 'react';
import { FaTachometerAlt, FaUpload, FaUsers, FaCog, FaBars, FaUserCircle, FaOpencart } from 'react-icons/fa';
import { MdOutlinePayment } from "react-icons/md";

const Sidebar = ({ userType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed z-0 h-screen pt-24 md:pt-36 text-white">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none md:hidden'
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 bg-gradient-to-r from-[#4546ED] to-[#272887] text-white w-64 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <FaBars size={24} />
          </button>
        </div>
        <nav className="mt-16 md:mt-24 text-xl font-krona space-y-4">
          {userType === 'admin' && (
            <>
            <a href="#dashboardadmin" className="flex items-center p-2 hover:bg-blue-700">
            <FaTachometerAlt className="mr-3 text-3xl" /> DASHBOARD
          </a>
              <a href="#uploads" className="flex items-center p-2 hover:bg-blue-700">
                <FaUpload className="mr-3 text-3xl" /> UPLOAD MEDIA
              </a>
              <a href="#users" className="flex items-center p-2 hover:bg-blue-700">
                <FaUsers className="mr-3 text-3xl" /> USERS
              </a>
              <a href="#settings" className="flex items-center p-2 hover:bg-blue-700">
                <FaCog className="mr-3 text-3xl" /> SETTINGS
              </a>
            </>
          )}
          {userType === 'user' && (
            <>
            <a href="#dashboarduser" className="flex items-center p-2 hover:bg-blue-700">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </a>
              <a href="#profile" className="flex items-center p-2 hover:bg-blue-700">
                <FaUserCircle className="mr-3" /> Profile
              </a>
              <a href="#cart" className="flex items-center p-2 hover:bg-blue-700">
                <FaOpencart className="mr-3" /> Cart
              </a>
              <a href="#payment-methods" className="flex items-center p-2 hover:bg-blue-700">
                <MdOutlinePayment className="mr-3" /> Payment Methods
              </a>
            </>
          )}
          {userType === 'contributor' && (
            <>
            <a href="#dashboardcontri" className="flex items-center p-2 hover:bg-blue-700">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </a>
              <a href="#profile" className="flex items-center p-2 hover:bg-blue-700">
                <FaUserCircle className="mr-3" /> Profile
              </a>
              <a href="#uploads" className="flex items-center p-2 hover:bg-blue-700">
                <FaUpload className="mr-3" /> Uploads
              </a>
              <a href="#payment-methods" className="flex items-center p-2 hover:bg-blue-700">
                <MdOutlinePayment className="mr-3" /> Payment Methods
              </a>
            </>
          )}
        </nav>
      </div>
      <div className="flex-1 p-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <FaBars size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

