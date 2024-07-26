import React from 'react'
import cardImg01 from '../assets/courcesAssets/cardImg01.svg'
import cardImg02 from '../assets/courcesAssets/cardImg02.svg'
import cardImg03 from '../assets/courcesAssets/cardImg03.svg'
import rightArrow from '../assets/discoverAssets/rightArrow.svg'

function Courses() {
    const cources = [
        {
            img: cardImg01,
            content: 'Photography Mastery',
            des: 'Learn the art of capturing stunning visuals from top photographers.',

        },
        {
            img: cardImg02,
            content: 'Audio Production',
            des: 'Enhance your skills in music production, sound design, and audio editing.',

        },
        {
            img: cardImg03,
            content: 'Animation and VFX',
            des: 'Explore the magic of animation and visual effects with industry-leading software tutorials.',

        }
    ]
    return (
        <div className="flex flex-col text-white py-5 ">
            <div className="flex items-center justify-center">
                <div className="flex flex-col text-center items-center gap-3 w-2/3 justify-center">
                    <h1 className="text-4xl font-semibold"  data-aos="fade-right">Learn and Grow with Our Expert-Led Courses</h1>
                    <h1 className="text-md"  data-aos="fade-left">Unlock your creative potential with our expert-led courses for all skill levels. Whether you're a beginner or a professional, our courses cover a wide range of media creation topics to help you grow and excel</h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-5">
                {
                    cources.map((cource) => (
                        <div>
                            <div className="rounded-3xl h-[250px]  flex justify-center px-3 items-center"  data-aos="fade-up" style={
                                {
                                    backgroundImage: `url(${cource.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                }
                            }>
                            </div>
                            <div className="py-5 font-light"  data-aos="fade-right">
                                <h1 className="text-3xl">{cource.content}</h1>
                                <h1 className="text-sm">{cource.des}</h1>
                                <button className='flex gap-3 text-sm items-center justify-start my-3 w-40 hover:gap-10 duration-300'> Explore More <img src={rightArrow} alt="" /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center">
                <button className='flex gap-3 items-center justify-center mb-5 rounded-full border p-5 w-52  hover:bg-gradient-to-r hover:from-[#4546ED] hover:to-[#272887]  hover:w-64 duration-300'> Explore More <img src={rightArrow} alt="" className='animate-pulse '/></button>
            </div>
        </div>
    )
}

export default Courses
