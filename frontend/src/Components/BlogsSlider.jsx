import React, { useState, useEffect } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import BlogImg from '../assets/Blog/BlogImg.svg';
import Arrow from '../assets/discoverAssets/rightArrow.svg'

const testimonials = [
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
  {
    title: 'Best Premerier Pro Slideshow templates',
    img: BlogImg,
  },
];

const BlogsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto my-16   text-white max-w-screen w-full">
      <h2 className="text-2xl md:text-4xl pb-5 text-center md:text-start">Our Latest Blogs</h2>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / 2)}%)` }}>
          {testimonials.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-96 p-2 box-border">
              <img src={slide.img} alt="" className="rounded-2xl w-96" />
              <h1 className="text-start p-2 text-xl">{slide.title}</h1>
              <button className='flex gap-3 text-sm items-center justify-start my-3 w-40 hover:gap-10 duration-300'> Explore More <img src={Arrow} alt="" /></button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top:1/2  md:top-0  right-10 transform -translate-y-1/2 text-3xl text-gray-800 bg-white rounded-full m-4"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top:1/2 md:top-0 right-0 transform -translate-y-1/2 text-3xl text-gray-800 bg-white rounded-full m-4"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default BlogsSlider;
