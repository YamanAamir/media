import React from 'react'
import { HeroSection } from '../Components/HeroSection'
import { Faq } from '../Components/Faq'
import { PopulerSearch } from '../Components/PopulerSearch'
import Categories from '../Components/Categories'

export const Home = () => {
  return (
    <div className='xl:px-32 lg:px-24'>
      <HeroSection />
      <Categories />  
      <PopulerSearch />
      <Faq />

    </div>
  )
}
