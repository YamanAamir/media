import React from 'react'

export const PopulerSearch = () => {

    const popularSearch = [
        {
            title: 'Happy Birthday',
            link: '/'
        },
        {
            title: 'Tatto Designs',
            link: '/'
        },
        {
            title: 'Background',
            link: '/'
        },
        {
            title: 'For Video',
            link: '/'
        },
        {
            title: 'Heart',
            link: '/'
        },
        {
            title: 'Crown',
            link: '/'
        },
        {
            title: 'Nature',
            link: '/'
        },
        {
            title: 'Mountain',
            link: '/'
        },
        {
            title: 'Football',
            link: '/'
        },
        {
            title: 'Butter',
            link: '/'
        },
        {
            title: 'Skull',
            link: '/'
        },
        {
            title: 'Heart',
            link: '/'
        },
        {
            title: 'Tree',
            link: '/'
        },
        {
            title: 'Congratulation',
            link: '/'
        },
        {
            title: 'Crosses',
            link: '/'
        },
        {
            title: 'Sun',
            link: '/'
        },
        {
            title: 'Fly',
            link: '/'
        },
        {
            title: 'Leaf',
            link: '/'
        },
        {
            title: 'Happy Friday',
            link: '/'
        },
    ]
  return (
    <div className='w-full flex justify-center text-white text-center px-2 py-4'>
        <div className='w-full md:w-1/2'>
        <h1 className='text-4xl'>Populer Search Requests</h1>
        <p className='py-6 text-xl'>Here are some of the most popular search requests we see every year.</p>
        <div className='flex flex-wrap justify-center gap-4'>
        {popularSearch.map((search) => (
           <button className='border border-white py-2 px-5 text-sm rounded-3xl hover:bg-gradient-to-r hover:from-[#4546ED] hover:to-[#272887] duration-300'>{search.title} </button>
        ))}
        </div>
        </div>
    </div>
  )
}
