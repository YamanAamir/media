// src/components/SliderComponent.jsx
import React, { useState, useEffect } from 'react';
import { IoStar } from "react-icons/io5";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const testimonials = [
  [
    {
      name: 'John D.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.8,
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    },
    {
      name: 'Sarah K.',
      text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      rating: 4.8,
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    },
    {
      name: 'Mike P.',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      rating: 4.8,
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    }
  ],
  [
    {
      name: 'Jane A.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.8,
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    },
    {
      name: 'Mark B.',
      text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      rating: 4.8,
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    },
    {
      name: 'Lucy C.',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      rating: 4.8,
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    }
  ]
];

const TestimonialsSlider = () => {
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto my-24 text-white max-w-7xl">
      <h2 className="text-2xl md:text-5xl text-center md:text-start">What Our Community is Saying?</h2>
      <p className="text-center md:text-start text-xl my-6">Real feedback from our members. See how we're making an impact together.</p>
      
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((slide, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col md:flex-row md:w-full w-screen">
              {slide.map((testimonial, idx) => (
                <div key={idx} className="w-96 md:w-1/3 p-4 box-border">
                  <div className="flex">
                    <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-24 h-24" />
                    <div className="items-center p-4">
                      <h1 className="text-2xl">{testimonial.name}</h1>
                      <p className="text-sm text-gray-500 underline">{testimonial.text}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <IoStar color="yellow" size="20px" />
                    <p className="text-xl">{testimonial.rating}</p>
                    <p className="w-72 p-4 pl-8">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute hidden md:block md:top-0 right-10 text-3xl text-gray-800 bg-white rounded-full m-4"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute hidden md:block md:top-0 right-0 text-3xl text-gray-800 bg-white rounded-full m-4"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default TestimonialsSlider;
