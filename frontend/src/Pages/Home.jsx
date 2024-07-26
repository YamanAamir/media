import React from 'react'
import { HeroSection } from '../Components/HeroSection'
import { Faq } from '../Components/Faq'
import { PopulerSearch } from '../Components/PopulerSearch'
import Categories from '../Components/Categories'
import TestimonialsSlider from '../Components/TestimonialsSlider'
import Discover from '../Components/Discover'
import BlogsSlider from '../Components/BlogsSlider'
import Courses from '../Components/Courses'
import { HowWorks } from '../Components/HowWorks'

export const Home = () => {
  return (
    <div className='xl:px-32 lg:px-24'>
      <HeroSection />
      <Categories />
      <Discover />
      <HowWorks />
      <Courses />
      <PopulerSearch />
      <TestimonialsSlider />
      <BlogsSlider />
      <Faq />

    </div>
  )
}
