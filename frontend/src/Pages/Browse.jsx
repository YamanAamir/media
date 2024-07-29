import React, { useEffect, useState } from 'react';
import MasonryGridImages from '../Components/MasonryGridImages';
import MasonryGridVideos from '../Components/MasonaryGridVideos';
import { HeroSection } from '../Components/HeroSection';
import MasonryGridAudio from '../Components/MasonaryGridAudio';

import AOS from "aos";
import 'aos/dist/aos.css';
import MasonryGridTemplate from '../Components/MasonaryGridTemplate';


export const Browse = () => {
  const [category, setCategory] = useState('images');

  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });

  return (
    <div className="min-h-screen xl:px-32 lg:px-24">
      <HeroSection />
      <div className='flex justify-center flex-wrap md:w-full text-white gap-2 my-12'>
        <button 
          className={`p-2 font-light duration-200 px-7 rounded-full hover:border hover:bg-none ${category === 'images' ? 'bg-gradient-to-r from-[#5354F4] to-[#2C2DE2]' : 'bg-none'}`}
          onClick={() => setCategory('images')}
        >
          Images
        </button>
        <button
          className={`p-2 font-light duration-200 px-7 rounded-full hover:border hover:bg-none ${category === 'videos' ? 'bg-gradient-to-r from-[#5354F4] to-[#2C2DE2]' : 'bg-none'}`}
          onClick={() => setCategory('videos')}
        >
          Videos
        </button>
        <button
          className={`p-2 font-light duration-200 px-7 rounded-full hover:border hover:bg-none ${category === 'audios' ? 'bg-gradient-to-r from-[#5354F4] to-[#2C2DE2]' : 'bg-none'}`}
          onClick={() => setCategory('audios')}
        >
          Audios
        </button>
        <button
          className={`p-2 font-light duration-200 px-7 rounded-full hover:border hover:bg-none ${category === 'templates' ? 'bg-gradient-to-r from-[#5354F4] to-[#2C2DE2]' : 'bg-none'}`}
          onClick={() => setCategory('templates')}
        >
          Templates
        </button>
      </div>

      {category === 'images' && <MasonryGridImages />}
      {category === 'videos' && <MasonryGridVideos />}
      {category === 'audios' && <MasonryGridAudio />}
      {category === 'templates' && <MasonryGridTemplate />}


    </div>
  );
};
