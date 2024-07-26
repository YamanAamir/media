import React from 'react'
import cardImg01 from '../assets/categoriesAssets/cardImg01.svg'
import cardImg02 from '../assets/categoriesAssets/cardImg02.svg'
import cardImg03 from '../assets/categoriesAssets/cardImg03.svg'
import cardImg04 from '../assets/categoriesAssets/cardImg04.svg'
import { FaPlay } from "react-icons/fa";

function Categories() {
    const categories = [
        {
            img: cardImg01,
            head: 'SUMO',
            title: 'Strlght',
            content: 'Videos',
            des: '300 + High-Quality Footage',

        },
        {
            img: cardImg02,
            head: 'ICON',
            title: 'Janset',
            content: 'Images',
            des: '1000 + Stunning Photos',

        },
        {
            img: cardImg03,
            head: 'SKULL CRUSJER',
            title: 'Crushy',
            content: 'Audio',
            des: '300 + Professional-Grade Audio',

        },
        {
            img: cardImg04,
            head: 'SECOND SLIDE',
            title: 'Yomot!',
            content: 'Templates',
            des: '500 + Customizable Templates',

        }
    ]
    return (
        <div className='text-white px-4 pb-10'>
            <div className='py-5'>
                <h1 className='text-6xl'>Essential Media Categories</h1>
                <p className='text-lg'>Where is your next project?</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 py-5">
                {
                    categories.map((category) => (
                        <div>
                            <div className="rounded-3xl h-[550px]  flex justify-center px-3 items-center" style={
                                {
                                    backgroundImage: `url(${category.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                }
                            }>
                                <div className="flex justify-start items-center gap-3 p-3 w-full rounded-xl backdrop-blur-xl ">
                                    <div className="flex justify-center items-center rlative">
                                        <img className='h-20 ' src={category.img} alt="" />
                                        <FaPlay className='absolute text-3xl' />
                                    </div>
                                    <div className='px-2'>
                                        <h1 className='text-2xl'>{category.head}</h1>
                                        <h1 className='text-md'>{category.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5 font-light">
                                <h1 className="text-3xl">{category.content}</h1>
                                <h1 className="text-sm">{category.des}</h1>
                            </div>
                        </div>
                    ))
                }
                {/* <div class="bg-gray-500 rounded-3xl p-3 h-96">
                    <div className="" style={
                        {
                            backgroundImage: `url(${BgHero})`,
                            backgroundSize: '1500px',
                            // backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }
                    }>

                    </div>
                </div>
                <div class="bg-gray-500 rounded-3xl p-3 h-96">
                    <div className="" style={
                        {
                            backgroundImage: `url(${BgHero})`,
                            backgroundSize: '1500px',
                            // backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }
                    }>

                    </div>
                </div>
                <div class="bg-gray-500 rounded-3xl p-3 h-96">
                    <div className="" style={
                        {
                            backgroundImage: `url(${BgHero})`,
                            backgroundSize: '1500px',
                            // backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }
                    }>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Categories
