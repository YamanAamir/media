import React, { useEffect } from 'react';
import { FiArrowDownLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';
import BlogsSlider from '../Components/BlogsSlider';


import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'

export const Blogs = () => {
    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            link: "/blogs/1",
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            link: "/blogs/1",
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 1,
            name: 'Focus Paper Refill',
            link: "/blogs/1",
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 2,
            name: 'Machined Mechanical Pencil',
            link: "/blogs/1",
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 1,
            name: 'Earthen Bottle',
            link: "/blogs/1",
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            link: "/blogs/1",
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 1,
            name: 'Focus Paper Refill',
            link: "/blogs/1",
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 2,
            name: 'Machined Mechanical Pencil',
            link: '/blogs/2',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
    ];

    useEffect(() => {
        AOS.init({ duration: '1000', delay: '0' });
    }, []);

    return (
        <div className='md:py-32 mb-36 py-12 justify-center max-w-screen text-white'>
            <img src={Ellipse1} alt=""  className='absolute left-0 rotate-180 ' />
            <img src={Ellipse3} alt=""  className='absolute right-0  top-0' />

            <div className='flex flex-wrap justify-around items-center my-10 px-4'>
                <h1 data-aos='fade-right' className='text-3xl md:text-5xl my-2 text-center'>LYME CAY MEDIA Blogs</h1>
            </div>
            <div className='text-white'>
                <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                    <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 xl:gap-x-8'>
                        {products.map((product) => (
                            <Link to={`/blogs/${product.id}`} key={product.id} className='group'>
                                <div className='w-full overflow-hidden'>
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className='w-full rounded-xl group-hover:opacity-75 transform transition-transform duration-500 group-hover:scale-110'
                                        data-aos='fade-up'
                                    />
                                    <div className='my-2 gap-1' data-aos='fade-right'>
                                        <h1 className='text-2xl'>The Evolution of UI/UX</h1>
                                        <p className='font-sans text-md'>{product.name}</p>
                                        <p className='font-sans text-sm'>{product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
