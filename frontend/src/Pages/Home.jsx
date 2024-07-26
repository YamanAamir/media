import React from 'react'
import { HeroSection } from '../Components/HeroSection'
import { Faq } from '../Components/Faq'
import { PopulerSearch } from '../Components/PopulerSearch'
import Categories from '../Components/Categories'
import TestimonialsSlider from '../Components/TestimonialsSlider'
import Discover from '../Components/Discover'

export const Home = () => {
  return (
    <div className='xl:px-32 lg:px-24'>
      <HeroSection />
      <Categories />
      <Discover />
      <PopulerSearch />
      <TestimonialsSlider />
      <Faq />

    </div>
  )
}
