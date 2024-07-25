import React, { useState } from 'react';
import logo from "../assets/Bidec-logo.svg";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link, NavLink, useLocation } from 'react-router-dom';


export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleToggleServices = () => {
        setShowServices(prevShowServices => !prevShowServices);
    };

    const closeServices = () => {
        setShowServices(false);
    };

    const isServicesActive = location.pathname.includes('/service');

    return (
        <nav className='fixed top-0 w-full z-50 max-w-screen'
            data-aos="fade-down">
            <div className='flex justify-between items-center max-w-screen min-w-screen px-10 py-4 bg-[#0b0b0b] '>
                <Link to='/'>
                    <img src={logo} alt="Logo" className='w-20 md:w-28' />
                </Link>
                {/* Mobile View */}
                <button className='md:hidden focus:outline-none' onClick={toggleMenu}>
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
                <div className={`md:hidden absolute z-40 top-16 right-0 w-full text-center pt-4 pb-8 transition-transform duration-300 bg-[#227c85] bg-opacity-100 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <ul className='text-white '>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>
                            <NavLink to='/' onClick={toggleMenu}>HOME</NavLink>
                        </li>
                        <li className='block p-2 text-lg text-center duration-300 cursor-pointer'>
                            <div className='relative text-lg duration-300 cursor-pointer'>
                                <div onClick={handleToggleServices}>
                                    SERVICES
                                    {/* {showServices ? (
                                <RiArrowDropUpLine className='mb-1' size={"2rem"} />
                            ) : (
                                <RiArrowDropDownLine className='mb-1' size={"2rem"} />
                            )} */}
                                </div>
                                {showServices && (
                                    <div className='absolute z-10 left-20 top-full flex flex-col mt-2 w-48 text-sm text-center text-[#227c85] bg-[#eff1f3] border border-gray-300 shadow-lg rounded-2xl'>
                                        <Link to='/service/web-design-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-t-2xl' onClick={closeServices}>Web Development</Link>
                                        <Link to='/service/custom-software-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200' onClick={closeServices}>Custom Software</Link>
                                        <Link to='/service/ui-ux-design' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl' onClick={closeServices}>UI/UX</Link>
                                        <Link to='/service/graphic-designing' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl' onClick={closeServices}>Graphic Design</Link>
                                        <Link to='/service/mobile-app-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl' onClick={closeServices}>App Development</Link>
                                        <Link to='/service/ecommerce-solutions' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl' onClick={closeServices}>E-commerce Solution</Link>
                                        <Link to='/service/digital-marketing' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl' onClick={closeServices}>Digital Marketing</Link>

                                    </div>
                                )}
                            </div>
                        </li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>
                            <NavLink to='/about' onClick={toggleMenu}>ABOUT US</NavLink>
                        </li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>
                            <NavLink to='/blogs' onClick={toggleMenu}>BLOGS</NavLink>
                        </li>
                        <li className='block p-2 hover:text-[#227c85] text-lg duration-300 cursor-pointer'>
                            <NavLink to='/contactus' onClick={toggleMenu}>CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
                {/* Desktop View */}
                <ul className='hidden md:flex font-semibold gap-8 '>
                    <NavLink to='/' className={({ isActive }) => `font-sans ${isActive ? 'text-[#227c85] font-bold' : 'text-black'} hover:text-[#227c85] text-lg duration-300 cursor-pointer`}>HOME</NavLink>
                    <div className={`relative ${isServicesActive ? 'text-[#227c85]' : 'text-black'} hover:text-[#227c85] text-lg duration-300 cursor-pointer`}>
                        <div className='flex font-sans' onClick={handleToggleServices}>
                            SERVICES
                            {showServices ? (
                                <RiArrowDropUpLine className='mb-1' size={"2rem"} />
                            ) : (
                                <RiArrowDropDownLine className='mb-1' size={"2rem"} />
                            )}
                        </div>
                        {showServices && (
                            <div className='absolute z-10 left-0 top-full flex flex-col mt-2 w-52 text-center bg-[#eff1f3] border border-gray-300 shadow-lg rounded-2xl'>
                                <Link to='/service/web-design-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-t-2xl' onClick={closeServices}>Web Development</Link>
                                <Link to='/service/custom-software-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200' onClick={closeServices}>Custom Software</Link>
                                <Link to='/service/ui-ux-design' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200' onClick={closeServices}>UI/UX</Link>
                                <Link to='/service/graphic-designing' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 ' onClick={closeServices}>Design</Link>
                                <Link to='/service/mobile-app-development' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200' onClick={closeServices}>App Development</Link>
                                <Link to='/service/ecommerce-solutions' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200' onClick={closeServices}>E-comerce Solution</Link>
                                <Link to='/service/digital-marketing' className='font-sans px-4 py-2 hover:text-white hover:bg-[#227c85] duration-200 rounded-b-2xl' onClick={closeServices}>Digital Marketing</Link>
                            </div>
                        )}
                    </div>
                    <NavLink to='/aboutus' className={({ isActive }) => `font-sans ${isActive ? 'text-[#227c85] font-bold' : 'text-black'} hover:text-[#227c85] text-lg duration-300 cursor-pointer`}>ABOUT US</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => `font-sans ${isActive ? 'text-[#227c85] font-bold' : 'text-black'} hover:text-[#227c85] text-lg duration-300 cursor-pointer`}>BLOGS</NavLink>
                </ul>
                <div className='hidden md:flex ml-4'>
                    <Link to='./contactus' className='px-4 py-2 font-sans hover:bg-[#227c85] hover:text-white hover:border-white rounded-3xl bg-transparent border-2 border-[#227c85] text-[#227c85] duration-300'>CONTACT US</Link>
                </div>
            </div>
        </nav>
    
  )
}
