import React from 'react';
import footerBg from '../assets/footerAssets/footerBgImg.svg'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="relative w-full bg-[#1A1A1A] bg-cover  bg-center">
            <div className="container mx-auto lg:px-20 px-10 flex flex-col items-center justify-center relative ">
                <div className="w-full">
                    <div className="flex py-20 justify ">
                        <div className="flex flex-col lg:flex-row gap-8 text-white justify-around items-start">
                            <div className="flex flex-col w-full md:w-1/2 ">
                                <h1 className="text-4xl font-krona py-4">LYME CAY MEDIA</h1>
                                <p className=' text-sm text-start'>Lyme Cay Media offers a comprehensive collection of premium stock photos, videos, audio, and templates. Our mission is to provide high-quality media assets to support your creative projects and bring your vision to life.</p>
                            </div>
                            <div className="text-start flex flex-col items-start justify-center   md:w-1/4 w-full">
                                <h1 className="text-xl font-krona py-4">QUICKLINKS</h1>
                                <ul className=" gap-4 flex-col md:flex-row">
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link className="" to="/">Home</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link className="" to="/aboutus">Browse</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link className="" to="/blogs">Contributors</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link className="" to="/contactus">Support</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link className="" to="/contactus">Blog</Link></li>
                                </ul>
                            </div>
                            <div className="text-start  flex flex-col items-start justify-center   md:w-1/4 w-full">
                                <h1 className="text-xl font-krona py-4">LICENSE</h1>
                                <ul className=" gap-4 flex-col md:flex-row">
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link to="">Artlist License</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link to="">Terms of Use</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link to="">Copyright Policy</Link></li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2"><Link to="">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="text-start flex flex-col items-start justify-center  md:w-1/4 w-full">
                                <h1 className="text-xl font-krona py-4">FOLLOW US</h1>
                                <ul className=" gap-4 flex-col md:flex-row">
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2">Facebook</li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2">Twitter</li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2">Instagram</li>
                                    <li className="  text-sm rounded-xl hover:font-bold duration-300 cursor-pointer py-2">LinkedIn</li>
                                </ul>
                            </div>
                            <div className="text-start flex flex-col items-start justify-center md:w-1/2 w-full">
                                <h1 className="text-xl font-krona py-4">CONTACT US</h1>
                                <ul>
                                    <li className=" font-light text-md rounded-xl duration-300 cursor-pointer py-2">For any inquiries or support, please reach out to us at:
                                    </li>
                                    <li className=" font-light text-md rounded-xl duration-300 cursor-pointer py-2 pl-6 relative"><MdEmail className='absolute  duration-300 left-0 top-3 text-lg ' /> support@lymecaymedia.com </li>
                                    <li className=" font-light text-md rounded-xl duration-300 cursor-pointer py-2 pl-6 relative"><FaPhone className='absolute  duration-300 left-0 top-3 text-lg ' /> +1 (800) 123-4567</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-0 md:flex-row p-4 bg-[#1E1E1E] justify-center items-center">
                <p className='text-gray-400  text-sm'>© 2024 <span className='font-krona text-white'> LYME CAY MEDIA </span> All Rights Reserved.</p>
            </div>
        </div>

    );
}

export default Footer;