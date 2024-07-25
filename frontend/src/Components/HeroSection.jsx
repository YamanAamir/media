import React from 'react'
import BgHero from '../assets/HeroSection/BgImage.svg'

export const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center   min-h-screen '
    style={
        {
            backgroundImage: `url(${BgHero})`,
            backgroundSize: '100% 100%',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }
    }>
     <h1>Discover Premium Stock Media
     for Your Creative Projects</h1>
     </div>
  )
}
