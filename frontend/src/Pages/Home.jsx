import React, {useEffect} from 'react'
import { HeroSection } from '../Components/HeroSection'
import { Faq } from '../Components/Faq'
import { PopulerSearch } from '../Components/PopulerSearch'
import Categories from '../Components/Categories'
import TestimonialsSlider from '../Components/TestimonialsSlider'
import Discover from '../Components/Discover'
import BlogsSlider from '../Components/BlogsSlider'
import Courses from '../Components/Courses'
import { HowWorks } from '../Components/HowWorks'

import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'

import AOS from "aos";
import 'aos/dist/aos.css';

export const Home = () => {

  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });

  return (
    <div className='relative xl:px-32 lg:px-24'>
      <img src={Ellipse1} alt=""  className='absolute left-0 rotate-180 ' />
      <img src={Ellipse3} alt=""  className='absolute right-0  top-0' />

      <HeroSection />
      <img src={Ellipse3} alt=""  className='absolute left-0 rotate-180 ' />
      <img src={Ellipse1} alt=""  className='absolute right-0 ' />
      <Categories />
      <img src={Ellipse2} alt=""  className='absolute left-0 ' />
      
      <Discover />
      <HowWorks />
      <Courses />
      <PopulerSearch />
      <img src={Ellipse3} alt=""  className='absolute right-0  ' />  
      <img src={Ellipse1} alt=""  className='absolute left-0 rotate-180' />

      <TestimonialsSlider />
      <BlogsSlider />
      <img src={Ellipse3} alt=""  className='absolute left-0 rotate-180' />

      <Faq />

    </div>
  )
}
