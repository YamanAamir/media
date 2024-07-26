import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";




export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What types of media do you offer?',
            answer: 'We offer a wide range of premium stock media including images, videos, audio, and templates for various creative projects.'
        },
        {
            question: 'How can I purchase media?',
            answer: 'To purchase media, simply browse our collection, add the desired items to your cart, and proceed to checkout. We offer various payment options for your convenience.'
        },
        {
            question: 'What are the licensing terms?',
            answer: 'Our licensing terms vary depending on the type of media. Generally, we offer royalty-free licenses that allow you to use the media for both personal and commercial projects. Please review our detailed licensing terms on the product page before making a purchase.'
        },
        {
            question: 'Can I upload my own media?',
            answer: 'Yes, you can upload your own media to our platform. Please ensure that your files meet our quality and content guidelines. For more details, visit our upload page.'
        },
        {
            question: 'How do I contact support?',
            answer: 'You can contact our support team via email, phone, or live chat. Visit our contact page for more information and assistance.'
        }
    ];


    return (
        <div
            className="flex justify-center items-start px-5 my-10 gap-4 flex-col bg-transparent text-white"
        >
            <h1 className='md:text-4xl text-2xl py-8' data-aos="fade-right">Frequently asked questions</h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    data-aos="fade-left"
                    className="w-full mb-2">
                    <div className="transition duration-300 ">
                        <div
                            className={`flex justify-between items-center roundedxl cursor-pointer ${activeIndex === index ? 'text-white border-2 border-[#272887] rounded-t-xl ' : 'text-white'} ${activeIndex === index ? '' : 'border-b border-gray-400'}`}
                            onClick={() => toggleAccordion(index)}
                            >
                            <h1 className='md:text-xl text-lg p-4 md:p-6'>{faq.question}</h1>
                            <span className='md:text-2xl text-xl px-4 '>
                                {activeIndex === index ? <IoIosArrowUp className='animate-bounce' /> : <IoIosArrowDown />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 text-white bg-gradient-to-r from-[#4546ED] to-[#272887] rounded-b-xl">
                                <p className='text-sm md:text-xl px-4'>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
