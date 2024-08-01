// src/components/Sidebar.js
import React, { useState } from 'react';
import { FaTachometerAlt, FaUpload, FaUsers, FaCog, FaBars, FaUserCircle, FaOpencart } from 'react-icons/fa';
import { MdOutlinePayment } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = ({ userType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed z-0 h-screen pt-24 md:pt-36 text-white">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none md:hidden'
          }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 bg-gradient-to-r from-[4546ED] to-[272887] text-white w-64 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
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
              <Link to="/dashboard" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaTachometerAlt className="mr-3 text-3xl" /> DASHBOARD
              </Link>
              <Link to="/admin/uploads" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaUpload className="mr-3 text-3xl" /> UPLOAD MEDIA
              </Link>
              <Link to="/users" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaUsers className="mr-3 text-3xl" /> USERS
              </Link>
              <Link to="settings" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaCog className="mr-3 text-3xl" /> SETTINGS
              </Link>
            </>
          )}
          {userType === 'user' && (
            <>
              <Link to="dashboard" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaTachometerAlt className="mr-3 text-3xl" /> DASHBOARD
              </Link>
              <Link to="profile" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaUserCircle className="mr-3 text-3xl" /> PROFILE
              </Link>
              <Link to="cart" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaOpencart className="mr-3 text-3xl" /> CART
              </Link>
              <Link to="payment-methods" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <MdOutlinePayment className="mr-3 text-3xl" /> CHECKOUTS
              </Link>
            </>
          )}
          {userType === 'contributor' && (
            <>
              <Link to="dashboard" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaTachometerAlt className="mr-3 text-3xl" /> DASHBOARD
              </Link>
              <Link to="profile" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaUserCircle className="mr-3 text-3xl" /> Profile
              </Link>
              <Link to="uploads" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <FaUpload className="mr-3 text-3xl" /> UPLOAD MEDIA
              </Link>
              <Link to="payment-methods" className="flex items-center p-2 hover:bg-black duration-300 mx-[0.5px] rounded-lg">
                <MdOutlinePayment className="mr-3 text-3xl" /> CHECKOUTS
              </Link>
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

