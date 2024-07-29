import React, { useState } from 'react'
import { RiVipCrownFill } from "react-icons/ri";

function Pricing() {
    const [pricing, setPricing] = useState('Indiviual')
    return (
        < div className="py-24 text-white" >
            <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center bg-gradient-to-r from-[#4546ED] to-[#272887] w-full">
                <img src="https://freepik.cdnpk.net/img/banner/microfunnel-flaticon.webp" alt="" />
                <div className='flex flex-col py-20 px-5 gap-5 justify-center lg:items-start items-center'>
                    <p className='text-4xl'>Design anything, no matter the project</p>
                    <h1 className='text-2xl '>-50% on <span className='text-2xl font-krona'>LYME CAY MEDIA</span>
                        <br />  <span className='flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500'><RiVipCrownFill /> Premium</span>
                    </h1>
                    <p className='text-sm font-mono'>
                        Access over 256M images, videos, audios and templates</p>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center py-10 duration-300">
                <div className="flex justify-center items-center gap-10 border rounded-full p-1">
                    <button onClick={() => setPricing('Indiviual')} className={`${pricing === 'Indiviual' ? "bg-gradient-to-r from-[#4546ED] to-[#272887]" : ""}  rounded-full p-2 px-6 font-krona  duration-300`}>Indiviual</button>
                    <button onClick={() => setPricing('Team')} className={`${pricing === 'Team' ? "bg-gradient-to-r from-[#4546ED] to-[#272887]" : ""} rounded-full p-2 px-6 font-krona  duration-300`}>Team</button>
                </div>
                <div className="flex justify-center w-full">
                    <div className="w-1/2 bg-gray-600 h-32 rounded-xl">
                        <span className='flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500'><RiVipCrownFill /> Premium</span>
                    </div>
                    <div className="w-1/2 bg-gray-600 h-32 rounded-xl">
                        <span className='flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500'><RiVipCrownFill /> Premium</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Pricing
