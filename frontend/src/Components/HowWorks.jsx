import React from 'react'

export const HowWorks = () => {
    return (
        <div className='my-24'>
            <h1 className='text-center text-white md:text-4xl text-xl' data-aos="fade-left">How It Works</h1>
            <p className='text-center text-white text-lg md:text-xl py-4' data-aos="fade-right">Effortlessly Elevate Your Creative Projects</p>
        <div className='hidden lg:block py-16 relative z-10 text-white w-full h-60'  data-aos="zoom-out">
            <div className='flex justify-center items-center'>
                
                <div className='relative'>
                    <div className='w-1 h-[900px] md:w-[900px] md:h-1 bg-[#2424b7]'></div>
                    
                    {/* Point 1 */}
                    <div className='absolute left-1/2 -top-4 md:left-0 bg-[#2424b7] w-fit h-fit p-2 px-4 text-xl rounded-full'>1</div>
                    <div className='absolute left-1/2 top-12 md:-left-20 text-center'>
                        <h1 className='text-lg'>Search</h1>
                        <p className='w-52 text-sm text-gray-400 '>Use our advanced search functionality to find the perfect media for your project by keywords, categories, and filters.</p>
                    </div>
                    
                    {/* Point 2 */}
                    <div className='absolute top-1/2 md:-top-4 left-1/2 transform -translate-x-1/2 bg-[#2424b7] w-fit h-fit p-2 px-4 text-xl rounded-full'>2</div>
                    <div className='absolute top-1/2 md:top-10 left-1/2 transform -translate-x-1/2 text-center'>
                        <h1 className='text-lg'>Download</h1>
                        <p className='w-52 text-sm text-gray-400 '>Select the media you need and download it in your preferred resolution or format, ensuring it fits seamlessly into your work.</p>
                    </div>
                    
                    {/* Point 3 */}
                    <div className='absolute bottom-0 md:-top-4 md:right-0 bg-[#2424b7] w-fit h-fit p-2 px-4 text-xl rounded-full'>3</div>
                    <div className='absolute -bottom-10 md:top-12 md:-right-20 text-center'>
                        <h1 className='text-lg'>Create</h1>
                        <p className='w-52 text-sm text-gray-400 '>Incorporate the downloaded media into your projects, enhancing your creative output with high-quality assets.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

