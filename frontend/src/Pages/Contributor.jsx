import React, { useEffect } from 'react';
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { Faq } from '../Components/Faq';

import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'

import AOS from "aos";
import 'aos/dist/aos.css';


export const Contributor = () => {


  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });

  return (
    <div>
<img src={Ellipse1} alt=""  className='absolute left-0 rotate-180 ' />
<img src={Ellipse3} alt=""  className='absolute right-0  top-0' />
      <div className="relative md:mt-10 xl:px-32 lg:px-24 text-white">
        <img
          src="https://unsplash-assets.imgix.net/marketing/community/ava01.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
          alt=""
          className="absolute w-16 md:w-20 top-20 left-10 md:top-24 md:left-1/4 rounded-full animate-pulse "
        />
        <img
          src="https://unsplash-assets.imgix.net/marketing/community/ava02.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
          alt=""
          className="absolute w-20 md:w-24 top-32 left-20 md:top-36 md:left-1/3 rounded-full animate-pulse "
        />
        <img
          src="https://unsplash-assets.imgix.net/marketing/community/ava06.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
          alt=""
          className="absolute w-24 md:w-28 top-40 left-32 md:top-48 md:left-1/2 rounded-full animate-pulse "
        />
        <img
          src="https://unsplash-assets.imgix.net/marketing/community/ava03.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
          alt=""
          className="hidden md:block absolute w-20 md:w-24 top-1/2 left-3/4 rounded-full animate-pulse "
        />
        <img
          src="https://unsplash-assets.imgix.net/marketing/community/ava03.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
          alt=""
          className="hidden md:block absolute w-20 md:w-24 top-1/3 left-3/4 rounded-full animate-pulse "
        />
        <div className="flex flex-col justify-center items-center z-10 text-white h-screen relative">
          <div className="w-full flex justify-center">
            <div className="w-full mx-2 md:w-1/2 text-center">
              <h1 className="text-5xl mb-4" 
              data-aos="fade-right">Contribute to LYME CAY MEDIA</h1>
              <p className="text-2xl mb-6" 
              data-aos="fade-left">Unsplash is built by a community of creators who want to share — from amateurs to professionals and everyone in between.</p>
              <button className="p-2 font-light hover:px-10 duration-200 bg-gradient-to-r from-[#5354F4] to-[#2C2DE2] px-7 py-4 rounded-full hover:border hover:bg-none" 
              data-aos="fade-up">
                Become Contributor
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white py-12">
        <h1 className="text-5xl mb-4 text-center" 
        data-aos="fade-down">Over 340,000 creators contribute to Unsplash.</h1>
        <div className="w-full flex flex-wrap justify-center my-10 gap-8">
          
            <div className="w-80 h-fit bg-white text-black p-4 rounded-lg shadow-lg" 
            data-aos="fade-down">
              <div className="flex justify-between items-center py-2 mb-10">
                <div>
                  <h1 className="text-2xl font-bold">Joshua Earle</h1>
                  <div className="flex items-center">
                    <HiMiniArrowTrendingUp className="mr-1" /> 680M views
                  </div>
                </div>
                <img
                  src="https://unsplash-assets.imgix.net/marketing/community/ava03.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
                  alt=""
                  className="w-12 md:w-16 rounded-full"
                />
              </div>
              <p>“Without realizing it, by uploading to Unsplash, I was making real and meaningful connections all over the world. I was helping change the way people interacted with photography and provided resources to those that didn’t have access to any before.”</p>
            </div>
          
            <div className="w-80 h-fit md:mt-12 bg-white text-black p-4 rounded-lg shadow-lg" 
            data-aos="fade-up">
              <div className="flex justify-between items-center py-2 mb-10">
                <div>
                  <h1 className="text-2xl font-bold">Joshua Earle</h1>
                  <div className="flex items-center">
                    <HiMiniArrowTrendingUp className="mr-1" /> 680M views
                  </div>
                </div>
                <img
                  src="https://unsplash-assets.imgix.net/marketing/community/ava03.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
                  alt=""
                  className="w-12 md:w-16 rounded-full"
                />
              </div>
              <p>“Without realizing it, by uploading to Unsplash, I was making real and meaningful connections all over the world. I was helping change the way people interacted with photography and provided resources to those that didn’t have access to any before.”</p>
            </div>

            <div className="w-80 h-fit bg-white text-black p-4 rounded-lg shadow-lg" 
            data-aos="fade-down">  
              <div className="flex justify-between items-center py-2 mb-10">
                <div>
                  <h1 className="text-2xl font-bold">Joshua Earle</h1>
                  <div className="flex items-center">
                    <HiMiniArrowTrendingUp className="mr-1" /> 680M views
                  </div>
                </div>
                <img
                  src="https://unsplash-assets.imgix.net/marketing/community/ava03.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
                  alt=""
                  className="w-12 md:w-16 rounded-full"
                />
              </div>
              <p>“Without realizing it, by uploading to Unsplash, I was making real and meaningful connections all over the world. I was helping change the way people interacted with photography and provided resources to those that didn’t have access to any before.”</p>
            </div>

            <div className="w-80 h-fit md:mt-12 bg-white text-black p-4 rounded-lg shadow-lg" 
            data-aos="fade-up">
              <div className="flex justify-between items-center py-2 mb-10">
                <div>
                  <h1 className="text-2xl font-bold">Joshua Earle</h1>
                  <div className="flex items-center">
                    <HiMiniArrowTrendingUp className="mr-1" /> 680M views
                  </div>
                </div>
                <img
                  src="https://unsplash-assets.imgix.net/marketing/community/ava03.jpg?bg=fff&crop=faces&dpr=1&h=125&w=125&auto=format&fit=crop&q=60"
                  alt=""
                  className="w-12 md:w-16 rounded-full"
                />
              </div>
              <p>“Without realizing it, by uploading to Unsplash, I was making real and meaningful connections all over the world. I was helping change the way people interacted with photography and provided resources to those that didn’t have access to any before.”</p>
            </div>
            
       </div>
       <div className='w-full xl:px-32 lg:px-24'>
       <Faq />
       </div>
      </div>
    </div>
  );
};

