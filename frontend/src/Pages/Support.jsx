import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPhotoVideo, FaMusic, FaVideo, FaImage, FaFileAlt } from 'react-icons/fa';
import { Faq } from '../Components/Faq';

import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'

import AOS from "aos";
import 'aos/dist/aos.css';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const categories = [
  { icon: <FaMusic size={30} />, title: 'Music' },
  { icon: <FaVideo size={30} />, title: 'Videos' },
  { icon: <FaImage size={30} />, title: 'Images' },
  { icon: <FaFileAlt size={30} />, title: 'Templates' },
];

export const Support = () => {


  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });


  return (
    <div className='py-24 xl:px-32 lg:px-24'>
      <header className="text-white py-10 text-center bg-[url('https://images.unsplash.com/photo-1503755356442-db57841b13f9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex flex-col justify-center items-center">
        <p className="text-5xl py-4 font-krona" data-aos="fade-right">Media Support</p>
        <p className="text-md w-4/5 text-center" data-aos="fade-left">For all your media needs, Lyme Cay Media is here to help. Whether you’re a journalist, blogger, or content creator, our support team provides timely assistance and resources. Contact us at support@lymecaymedia.com for inquiries, press kits, and more. Stay connected with our latest updates and resources.</p>

        <div className="flex  md:gap-5 gap-1 py-4 ">
                        <Link to='/pricing' className='p-2 font-light hover:px-10 duration-200 bg-gradient-to-r from-[#5354F4] to-[#2C2DE2] px-7 rounded-full hover:border hover:bg-none'>Pricing</Link>
                        <Link to='/browse' className='border hover:px-10 duration-300  p-2 font-light px-7 hover:bg-gradient-to-r hover:from-[#5354F4] hover:to-[#2C2DE2] rounded-full'>Browse</Link>
                    </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className='w-full px-10 relative' data-aos="fade-up">
            <p className='text-lg hidden md:block text-[#848484] absolute top-[18px] pr-8 border-r-2 border-[#848484] left-16'>What are you looking for</p>
            <input className='w-full text-black p-5 md:pl-[280px] rounded-full' type="text" placeholder='Search for videos, images, audio, templates...' />
            <button className='p-3 hover:px-10 duration-200 flex font-semibold flex-row items-center gap-2 absolute top-[9px] right-12 font-light bg-gradient-to-r from-[#4546ED] to-[#272887] px-7 rounded-full'>Search <IoSearch className='animate-pulse ' /></button>
          </div>
        </div>
      </header>

      <div className='py-28 text-center px-1'>
        <img src={Ellipse1} alt="" className='absolute left-0 rotate-180 ' />
        <img src={Ellipse3} alt="" className='absolute right-0  top-0' />
        <h2 className="text-4xl mb-24 font-krona text-white"
          data-aos="fade-right">What do you need help with ?</h2>
        <div className="flex flex-wrap justify-center gap-32" data-aos="fade-up">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center w-28 hover:w-44 duration-300">
              <div className="text-blue-500 mb-4">{category.icon}</div>
              <p className="text-lg font-semibold">{category.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Faq />
    </div>

  )
}
