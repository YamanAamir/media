import React from 'react'
import BgHero from '../assets/HeroSection/BgImage.svg'
import { IoSearch } from "react-icons/io5";
export const HeroSection = () => {
    return (
        <div className="flex justify-center items-center">
            <div className='flex flex-col justify-start md:gap-20 gap-32 md:py-32 py-12 text-white items-center mt-[90px] z-20 rounded-3xl min-h-screen '
                style={
                    {
                        backgroundImage: `url('${BgHero}')`,
                        backgroundSize: '1500px',
                        // backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }
                }>
                <div className="flex justify-center text-center items-center flex-col">
                    <h1 className='md:text-6xl text-4xl md:w-2/3 w-full py-3'
                     data-aos="fade-right">Discover Premium Stock Media
                        for Your Creative Projects</h1>
                    <p className='text-md font-light md:w-1/2 w-2/3 '
                     data-aos="fade-left">Explore our vast library of videos, images, audio, and templates. Find flexible, affordable, and high-quality media for your projects.</p>
                    <div className="flex md:gap-5 gap-1 py-4 ">
                        <button className='p-2 font-light hover:px-10 duration-200 bg-gradient-to-r from-[#5354F4] to-[#2C2DE2] px-7 rounded-full hover:border hover:bg-none'>Explore More</button>
                        <button className='border hover:px-10 duration-300  p-2 font-light px-7 hover:bg-gradient-to-r hover:from-[#5354F4] hover:to-[#2C2DE2] rounded-full'>Explore More</button>
                    </div>
                </div>
                <div className='w-full px-10 relative' data-aos="fade-up">
                    <p className='text-lg hidden md:block text-[#848484] absolute top-[18px] pr-8 border-r-2 border-[#848484] left-16'>What are you looking for</p>
                    <input className='w-full text-black p-5 md:pl-[280px] rounded-full' type="text" placeholder='Search for videos, images, audio, templates...' />
                    <button className='p-3 hover:px-10 duration-200 flex font-semibold flex-row items-center gap-2 absolute top-[9px] right-12 font-light bg-gradient-to-r from-[#4546ED] to-[#272887] px-7 rounded-full'>Search <IoSearch className='animate-pulse ' /></button>
                </div>

            </div>
        </div>

    )
}
