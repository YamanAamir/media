import React, { useState } from 'react';
import { FaBars, FaTimes, FaBell, FaUserCircle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import UploadMedia from '../Components/UploadMedia';
import ContributorProfile from '../Components/ContributorProfile';
import ContributorDashboard from '../Pages/ContributorDashboard';

const ContributorDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [uploadMedia, setUploadMedia] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activePage, setActivePage] = useState('dashboard'); // Manage active page state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setMobileMenu(false); // Close mobile menu after selecting a page
  };

  return (
    <div>
      <nav className="bg-gray-800 fixed w-full z-10">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link to='/'> <h1 className="px-16 font-krona text-white">LYME CAY MEDIA</h1></Link>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <FaBell size={24} />
              </button>

              <div className="relative ml-3">
                <button
                  onClick={toggleSidebar}
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className='w-8 rounded-full focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>

                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link to="" onClick={() => handlePageChange('profile')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                      Your Profile
                    </Link>
                    {/* <Link to="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                      Settings
                    </Link> */}
                    <Link to="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenu ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="w-64 absolute -z-0 bg-gray-500 py-16 h-screen" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col w-64">
            <NavLink
              to=""
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
              onClick={() => handlePageChange('dashboard')}
            >
              Dashboard
            </NavLink>
            <NavLink
              to=""
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => handlePageChange('upload')}
            >
              Upload Media
            </NavLink>
            {/* <NavLink
              
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
             
            > 
              Profile
            </NavLink> */}
            {/* <NavLink
              to=""
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => handlePageChange('calendar')}
            >
              Calendar
            </NavLink> */}
          </div>
        </div>
      )}

      <div className="pt-10">
        {uploadMedia && <UploadMedia />}
      </div>

      <main className=" mx-2">
        {activePage === 'dashboard' && <ContributorDashboard />}
        {activePage === 'profile' && <ContributorProfile />}
        {activePage === 'upload' && <UploadMedia />}
        {activePage === 'checkout' && <div>Checkout Component</div>}
      </main>
    </div>
  );
};

export default ContributorDashboardLayout;
