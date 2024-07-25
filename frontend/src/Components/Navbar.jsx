import React, { useState } from 'react';
import logo from '../assets/Header/Logo.svg'
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useLocation } from 'react-router-dom';


export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='fixed top-0 w-full z-50 bg-[#0b0b0b] xl:px-24 py-4'
            >
            <div className='flex justify-between items-center px-10 py-4  '>
                <Link to='/'>
                    <img src={logo} alt="Logo" className='min-w-32 md:w-44' />
                </Link>
                {/* Mobile View */}
                <button className='lg:hidden focus:outline-none' onClick={toggleMenu}>
                    {isMenuOpen ? <IoMdClose color='white' size='2rem' /> : <HiOutlineBars3BottomRight color='white' size='2rem' /> }
                </button>
                <div className={`lg:hidden absolute z-40 top-16 right-0 w-full text-center pt-4 pb-8 transition-transform duration-300 bg-[#0b0b0b] bg-opacity-100 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <ul className='text-white '>
                        <li className='block p-2 hover:text-blue-700 text-lg duration-300 cursor-pointer'>
                            <NavLink to='/' onClick={toggleMenu}>HOME</NavLink>
                        </li>
                        <li className='block p-2 hover:text-blue-700 text-lg duration-300 cursor-pointer'>
                            <NavLink to='/about' onClick={toggleMenu}>Browse</NavLink>
                        </li>
                        <li className='block p-2 hover:text-blue-700 text-lg duration-300 cursor-pointer'>
                            <NavLink to='/blogs' onClick={toggleMenu}>Pricing</NavLink>
                        </li>
                        <li className='block p-2 hover:text-blue-700 text-lg duration-300 cursor-pointer'>
                            <NavLink to='/contactus' onClick={toggleMenu}>Contributors</NavLink>
                        </li>
                        <li className='block p-2 hover:text-blue-700 text-lg duration-300 cursor-pointer'>
                            <NavLink to='/' onClick={toggleMenu}>Support</NavLink>
                        </li>
                        <li className='block p-2 hover:text-blue-700 text-lg duration-300 cursor-pointer'>
                            <NavLink to='/about' onClick={toggleMenu}>Blogs</NavLink>
                        </li>
                      </ul>
                </div>
                {/* Desktop View */}
                <ul className='hidden lg:flex gap-8 mx-2'>
                    <NavLink to='/' className={({ isActive }) => `font-sans ${isActive ? 'text-blue-800' : 'text-white'} hover:text-blue-500 text-lg duration-300 cursor-pointer`}>HOME</NavLink>
                    <NavLink to='/aboutus' className={({ isActive }) => `font-sans ${isActive ? 'text-blue-800' : 'text-white'} hover:text-blue-500 text-lg duration-300 cursor-pointer`}>Browse</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => `font-sans ${isActive ? 'text-blue-800' : 'text-white'} hover:text-blue-500 text-lg duration-300 cursor-pointer`}>Pricing</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => `font-sans ${isActive ? 'text-blue-800' : 'text-white'} hover:text-blue-500 text-lg duration-300 cursor-pointer`}>Contributors</NavLink>
                    <NavLink to='/aboutus' className={({ isActive }) => `font-sans ${isActive ? 'text-blue-800' : 'text-white'} hover:text-blue-500 text-lg duration-300 cursor-pointer`}>Support</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => `font-sans ${isActive ? 'text-blue-800' : 'text-white'} hover:text-blue-500 text-lg duration-300 cursor-pointer`}>Blogs</NavLink>
                </ul>
                <div className='hidden lg:flex ml-4 text-white gap-1 items-center'>
                    <FaUserCircle color='white' size={'20px'}/>
                    <NavLink className='hover:text-blue-500'>Register</NavLink>
                    <span>/</span>
                    <NavLink className='hover:text-blue-500'>Login</NavLink>
                </div>
            </div>
        </nav>
    
  )
}
