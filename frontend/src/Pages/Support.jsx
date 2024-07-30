import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPhotoVideo, FaMusic, FaVideo, FaImage, FaFileAlt } from 'react-icons/fa';
import { Faq } from '../Components/Faq';

import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'

import AOS from "aos";
import 'aos/dist/aos.css';


const categories = [
    { icon: <FaMusic size={50} />, title: 'Music' },
    { icon: <FaVideo size={50} />, title: 'Videos' },
    { icon: <FaImage size={50} />, title: 'Images' },
    { icon: <FaFileAlt size={50} />, title: 'Templates' },
  ];

export const Support = () => {

    
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });


  return (
    <div className='py-24 xl:px-32 lg:px-24'>
      <header className="text-white py-20 text-center bg-[url('data:image/jpeg;base64,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')]">
        <p className="text-2xl"
        data-aos="fade-right">How can we help you today ?</p>
        <div className="mt-8 flex justify-center">
          <div className="bg-white w-fit rounded-full flex items-center overflow-hidden shadow-lg"
          data-aos="fade-left">
            <input 
              type="text" 
              placeholder="Search for support" 
              className="w-full md:w-96 p-2 text-black rounded-l-full border border-gray-300 outline-none border-none"
            />
            <button 
              className="flex items-center gap-1 py-2 px-6 text-white text-lg rounded-l-full bg-gradient-to-r from-[#4546ED] to-[#272887] "
            >
              Search
              <CiSearch />
            </button>
          </div>
        </div>
      </header>

      <div className='py-28 text-center px-1'>
      <img src={Ellipse1} alt=""  className='absolute left-0 rotate-180 ' />
      <img src={Ellipse3} alt=""  className='absolute right-0  top-0' />
      <h2 className="text-4xl mb-12 text-white"
      data-aos="fade-right">What do you need help with ?</h2>
      <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center w-44">
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
