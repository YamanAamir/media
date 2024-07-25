import React from 'react'
import BgHero from '../assets/HeroSection/BgImage.svg'
import { IoSearch } from "react-icons/io5";
export const HeroSection = () => {
  return (

    // <div className='relative z-10 w-full h-full  flex justify-center'>
    //   <img className='absolute z-20 pt-[100px] px-12 w-[1200px]' src={BgHero} alt="" />
    // </div>
    <div className='flex flex-col justify-around text-white items-center mt-[90px]  rounded-3xl min-h-screen '
      style={
        {
          backgroundImage: `url(${BgHero})`,
          backgroundSize: '1500px',
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      }>
      <div className="flex justify-center text-center items-center flex-col">
        <h1 className='text-6xl w-2/3 py-3'>Discover Premium Stock Media
          for Your Creative Projects</h1>
        <p className='text-md font-light w-1/2 '>Explore our vast library of videos, images, audio, and templates. Find flexible, affordable, and high-quality media for your projects.</p>
        <div className="flex gap-5 py-4">
          <button className='p-2 font-light bg-gradient-to-r from-[#5354F4] to-[#2C2DE2] px-7 rounded-full'>Explore More</button>
          <button className='border p-2 font-light px-7 rounded-full'>Explore More</button>
        </div>
      </div>
      <div className='w-full px-10 relative'>
        <p className='text-lg text-[#848484] absolute top-[18px] pr-8 border-r-2 border-[#848484] left-16'>What are you looking for</p>
        <input className='w-full text-black p-5 pl-[280px] rounded-full' type="text" placeholder='Search for videos, images, audio, templates...' />
        <button className='p-3 flex font-semibold flex-row items-center gap-2 absolute top-[9px] right-12 font-light bg-gradient-to-r from-[#4546ED] to-[#272887] px-7 rounded-full'>Search <IoSearch className='' /></button>
      </div>

    </div>
  )
}
