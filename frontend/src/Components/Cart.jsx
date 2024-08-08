import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';

function Cart() {
    const [paymentCategory, setPaymentCategory] = useState('Credit card');
    const shopCart = [
        {
            category: 'Audio',
            title: "Nightfall / Future Bass Music",
            image: "https://images.unsplash.com/photo-1721614463453-051bd28367b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
            owner: "SoulProdMusic",
            price: 55,
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        {
            category: 'Template',
            image: "https://images.unsplash.com/photo-1722082769464-58b8fc317c98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
            price: 50,
            owner: "John",
            title: "Nightfall / Future Bass Music",
        },
        {
            category: 'Image',
            image: "https://images.unsplash.com/photo-1721614463453-051bd28367b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
            price: 50,
            owner: "John",
            title: "Nightfall / Future Bass Music",
        },
        {
            category: 'Video',
            image: "https://images.unsplash.com/photo-1722082769464-58b8fc317c98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
            price: 120,
            owner: "Owais",
            title: "Nightfall / Future Bass Music",
            video: 'https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4',
        },
    ];

    return (
        <div className="md:p-24 p-8 py-24 text-white">
            <h1 className='text-4xl font-krona text-center py-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4546ED] to-[#272887]'>Shopping Cart</h1>
            <div className="flex justify-center items-start gap-10 lg:flex-row flex-col">
                <div className="flex justify-center lg:w-1/2 w-full items-center flex-col">
                    {
                        shopCart.map((data, index) => (
                            <div key={index} className="w-full my-4 flex flex-row p-3 justify-between gap-5 items-start bg-gradient-to-r from-[#4546ED] to-[#272887] p-3 rounded-xl">
                                <div className="flex flex-row">
                                    <img className='w-32 h-32 mr-4 rounded-xl' src={data.image} alt="" />
                                    <div>
                                        <h1 className='text-lg font-krona'>{data.category}</h1>
                                        <h1 className='text-lg'>{data.title}</h1>
                                        <h1 className='text-lg'>{data.owner}</h1>
                                        <h1 className='text-lg font-mono'>${data.price}</h1>
                                    </div>
                                </div>
                                <div>
                                    <button className='border p-2 rounded-full hover:bg-white hover:text-black duration-300'><ImCross /></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center p-5 lg:w-1/2 w-full items-center flex-col bg-[#1c1c24] my-4 rounded-lg">
                    <form className='flex flex-wrap justify-around w-full text-black items-center p-3 py-5 rounded-lg bg-gradient-to-r from-[#4546ED] to-[#272887]'>
                        <div className="flex flex-row justify-around w-full pb-3">
                            <label onClick={() => setPaymentCategory('Credit card')} className="text-white bg-[#1c1c24] hover:px-6 px-3 duration-100 rounded-lg font-krona p-2">
                                <input className='p-2 my-2 outline-none rounded' type="radio" name='payment' defaultChecked={paymentCategory === 'Credit card'} /> Credit card
                            </label>
                            <label onClick={() => setPaymentCategory('PayPal')} className="text-white bg-[#1c1c24] hover:px-6 px-3 duration-100 rounded-lg font-krona p-2">
                                <input className='p-2 my-2 outline-none rounded' type="radio" name='payment' defaultChecked={paymentCategory === 'PayPal'} /> PayPal
                            </label>
                            <label onClick={() => setPaymentCategory('Transfer')} className="text-white bg-[#1c1c24] hover:px-6 px-3 duration-100 rounded-lg font-krona p-2">
                                <input className='p-2 my-2 outline-none rounded' type="radio" name='payment' defaultChecked={paymentCategory === 'Transfer'} /> Transfer
                            </label>
                        </div>
                        {paymentCategory === 'Credit card' && (
                            <>
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Email address' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Name on card' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Card number' />
                                <input className='w-[66%] p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Expiration date (MM/YY)' />
                                <input className='w-1/3 p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='CVC' />
                            </>
                        )}
                        {paymentCategory === 'PayPal' && (
                            <>
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Email address' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Name on card' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Card number' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Expiration date (MM/YY)' />
                            </>
                        )}
                        {paymentCategory === 'Transfer' && (
                            <>
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Account Number' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Name on card' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Card number' />
                                <input className='w-full p-2 my-2 bg-gray-200 outline-none rounded' type="text" placeholder='Expiration date (MM/YY)' />
                            </>
                        )}
                        <button className='bg-[#1c1c24] font-krona text-white mt-3 rounded-xl p-3 hover:w-full duration-300 w-2/3'> Pay $738 </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cart;
