import React from 'react'
import bgImg from '../assets/discoverAssets/bgimg.svg'
import frImg from '../assets/discoverAssets/frimg.svg'
import musicIcon from '../assets/discoverAssets/musicIcon.svg'
import stockIcon from '../assets/discoverAssets/stockIcon.svg'
import voiceIcon from '../assets/discoverAssets/voiceoverIcon.svg'
import vedioIcon from '../assets/discoverAssets/videoIcon.svg'
import rightArrow from '../assets/discoverAssets/rightArrow.svg'
function Discover() {
    return (
        <div className='flex lg:flex-row flex-col sm:gap-32 text-white justify-center lg:items-start items-center'>
            <div className='relative py-10 sm:w-auto w-2/3'>
                <img src={bgImg} alt="" />
                <img className='absolute z-10 sm:w-auto w-1/3 sm:bottom-[-100px] bottom-0 sm:right-[-80px] right-[-30px]' src={frImg} alt="" />
            </div>
            <div className="lg:w-1/2 w-4/5 font-light p-10 flex flex-col gap-4 px-4">
                <div>
                    <h1 className='text-4xl font-semibold py-3'>Discover Top-Tier Media Assets</h1>
                    <h1 className='text-md'>Explore our extensive collection of premium-quality photos, videos, music, voiceovers, and templates, crafted by talented artists and available for royalty-free use</h1>
                </div>
                <div>
                    <div className="flex">
                        <img className='w-12 h-16' src={musicIcon} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold px-3 pb-2'>High-Quality Music</h1>
                            <h1 className='text-sm px-3'>Discover a diverse collection of high-quality music tracks created by talented artists, suitable for any project and available for royalty-free use.</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <img className='w-12 h-16' src={stockIcon} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold px-3 pb-2'>Stock Footage</h1>
                            <h1 className='text-sm px-3'>Enhance your visual storytelling with stunning, high-resolution footage in various themes and styles, all crafted by exceptional artists.</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <img className='w-12 h-16' src={voiceIcon} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold px-3 pb-2'>AI Voiceovers</h1>
                            <h1 className='text-sm px-3'>Utilize cutting-edge AI technology to generate lifelike voiceovers, adding a dynamic and engaging element to your videos, royalty-free.</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <img className='w-12 h-16' src={vedioIcon} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold px-3 pb-2'>Video Templates</h1>
                            <h1 className='text-sm px-3'>Streamline your production process with customizable video templates, allowing you to create polished and professional content effortlessly, all available royalty-free.</h1>
                        </div>
                    </div>
                </div>
                <button className='flex gap-3 items-center justify-center my-10 rounded-full border p-3 w-40  hover:bg-gradient-to-r hover:from-[#4546ED] hover:to-[#272887]  hover:w-52 duration-300'> Explore More <img src={rightArrow} alt="" /></button>
            </div>

        </div>
    )
}

export default Discover
