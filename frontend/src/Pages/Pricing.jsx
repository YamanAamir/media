import React, { useState } from "react";
import { RiVipCrownFill } from "react-icons/ri";


import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'

function Pricing() {
  const [pricing, setPricing] = useState("Monthly");

  return (
    <div className="py-24 text-white">
      <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center bg-gradient-to-r from-[#4546ED] to-[#272887] w-full">
        <img
          src="https://freepik.cdnpk.net/img/banner/microfunnel-flaticon.webp"
          alt="Banner"
          className="max-w-xs lg:max-w-md"
        />
        <div className="flex flex-col py-20 px-5 gap-5 justify-center lg:items-start items-center text-center lg:text-left">
          <p className="text-4xl">Design anything, no matter the project</p>
          <h1 className="text-2xl">
            -50% on <span className="font-krona">LYME CAY MEDIA</span>
            <br />
            <span className="flex flex-row justify-center lg:justify-start items-center gap-2 font-mono font-bold text-yellow-500">
              <RiVipCrownFill /> Premium
            </span>
          </h1>
          <p className="text-sm font-mono">
            Access over 256M images, videos, audios, and templates
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 duration-300">
      <img src={Ellipse1} alt=""  className='absolute left-0 rotate-180 ' />
      <img src={Ellipse3} alt=""  className='absolute right-0 top-0' />
        <div className="flex justify-center items-center z-10 gap-10 border rounded-full p-1">
          <button
            onClick={() => setPricing("Monthly")}
            className={`${
              pricing === "Monthly"
                ? "bg-gradient-to-r from-[#4546ED] to-[#272887] text-white"
                : " hover:text-strech"
            } rounded-full p-2 px-6 font-krona duration-300`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPricing("Annual")}
            className={`${
              pricing === "Annual"
                ? "bg-gradient-to-r from-[#4546ED] to-[#272887] text-white"
                : " hover:text-strech"
            } rounded-full p-2 px-6 font-krona duration-300`}
          >
            Annual
          </button>
        </div>
        <div className="flex flex-wrap justify-center w-full mt-10 gap-6">
          {pricing === "Monthly" && (
            <>
              <div className="w-full lg:w-1/3 bg-gray-700 h-64 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Basic Plan</h2>
                <p className="mt-4">Great for individuals starting out.</p>
                <p className="mt-2 text-lg font-semibold">$19.99/month</p>
                <span className="flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500 mt-4">
                  <RiVipCrownFill /> Premium
                </span>
              </div>
              <div className="w-full lg:w-1/3 bg-gray-700 h-64 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Pro Plan</h2>
                <p className="mt-4">Perfect for professionals.</p>
                <p className="mt-2 text-lg font-semibold">$49.99/month</p>
                <span className="flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500 mt-4">
                  <RiVipCrownFill /> Premium
                </span>
              </div>
            </>
          )}
          {pricing === "Annual" && (
            <>
              <div className="w-full lg:w-1/3 bg-gray-700 h-64 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Basic Plan</h2>
                <p className="mt-4">Great for individuals starting out.</p>
                <p className="mt-2 text-lg font-semibold">$199.99/year</p>
                <span className="flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500 mt-4">
                  <RiVipCrownFill /> Premium
                </span>
              </div>
              <div className="w-full lg:w-1/3 bg-gray-700 h-64 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Pro Plan</h2>
                <p className="mt-4">Perfect for professionals.</p>
                <p className="mt-2 text-lg font-semibold">$499.99/year</p>
                <span className="flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500 mt-4">
                  <RiVipCrownFill /> Premium
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center text-center py-10 w-full">
        <h2 className="text-5xl font-semibold mb-12">Features</h2>
        <div className="flex flex-wrap justify-center w-full gap-6">
          <div className="w-full lg:w-72 bg-gray-700 h-auto rounded-xl p-6">
            <h3 className="text-xl font-bold">Unlimited Downloads</h3>
            <p className="mt-4">
              Access and download any media file without limits. Enjoy the
              freedom to explore a vast library of resources without worrying
              about download quotas or restrictions. Perfect for projects of any
              scale.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-gray-700 h-auto rounded-xl p-6">
            <h3 className="text-xl font-bold">High-Resolution Content</h3>
            <p className="mt-4">
              Get access to high-quality images, videos, and audios. Our
              collection includes premium resolution files that ensure your
              projects look professional and polished. Ideal for print and
              digital media.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-gray-700 h-auto rounded-xl p-6">
            <h3 className="text-xl font-bold">Commercial Use</h3>
            <p className="mt-4">
              Use any downloaded content for commercial purposes. Whether you're
              working on advertising, promotional materials, or client projects,
              you can confidently incorporate our media into your work.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-gray-700 h-auto rounded-xl p-6">
            <h3 className="text-xl font-bold">New Content Added Daily</h3>
            <p className="mt-4">
              Stay updated with fresh content added every day. Our library
              continuously grows with new and trending media, ensuring you
              always have access to the latest resources and creative
              inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;



// import React, { useState } from 'react'
// import { RiVipCrownFill } from "react-icons/ri";
// import { GiCheckMark } from "react-icons/gi";

// function Pricing() {
//     const indiviual = [
//         {
//             des: 'Daily Unlimited downloads',
//         },
//         {
//             des: 'Online editor',
//         },
//         {
//             des: '256M Premium photos, images, audios and templates',
//         },
//         {
//             des: 'No attribution required',
//         },
//         {
//             des: 'Ad-free browsing',
//         },
//         {
//             des: 'Priority support',
//         },
//     ]
//     const [pricing, setPricing] = useState('Indiviual')
//     // const [indiviual, setIndiviual] = useState(false)
//     // const [team, setTeam] = useState(false)

//     // const toggleIndiviual = () => {
//     //     setIndiviual(!indiviual)
//     // }
//     return (
//         < div className="py-24 text-white" >
//             <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center bg-gradient-to-r from-[#4546ED] to-[#272887] w-full">
//                 <img src="https://freepik.cdnpk.net/img/banner/microfunnel-flaticon.webp" alt="" />
//                 <div className='flex flex-col py-20 px-5 gap-5 justify-center lg:items-start items-center'>
//                     <p className='text-4xl'>Design anything, no matter the project</p>
//                     <h1 className='text-2xl '>-50% on <span className='text-2xl font-krona'>LYME CAY MEDIA</span>
//                         <br />  <span className='flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500'><RiVipCrownFill /> Premium</span>
//                     </h1>
//                     <p className='text-sm font-mono'>
//                         Access over 256M images, videos, audios and templates</p>
//                 </div>
//             </div>
//             <div className="flex justify-center flex-col gap-10 items-center py-10 duration-300">
//                 <div className="flex justify-center items-center gap-10 border rounded-full p-1">
//                     <button onClick={() => setPricing('Indiviual')} className={`${pricing === 'Indiviual' ? "bg-gradient-to-r from-[#4546ED] to-[#272887]" : ""}  rounded-full p-2 px-6 font-krona hover:px-10 duration-300`}>Indiviual</button>
//                     <button onClick={() => setPricing('Team')} className={`${pricing === 'Team' ? "bg-gradient-to-r from-[#4546ED] to-[#272887]" : ""} rounded-full p-2 px-6 font-krona hover:px-10 duration-300`}>Team</button>
//                 </div>
//                 {pricing == "Indiviual" &&
//                     (
//                         <div className="flex justify-center items-center lg:flex-row flex-col md:px-24 px-5 w-full">
//                             <div className="lg:w-1/2 flex flex-col justify-start items-center gap-2 w-full bg-gradient-to-r from-[#4546ED] to-[#272887]  p-5  m-5 rounded-xl">
//                                 <span className=' font-krona flex flex-row justify-start items-center gap-2 text-xl font-bold text-yellow-500 '><RiVipCrownFill className='text-2xl' /> PRIMIUM</span>
//                                 <ul className='flex flex-col items-start py-5'>
//                                     {
//                                         indiviual.map((prop) => (
//                                             <li className='flex flex-row justify-center py-1 items-center gap-2'><GiCheckMark className='text-yellow-500 text-xl' />{prop.des}</li>
//                                         ))
//                                     }
//                                 </ul>
//                             </div>
//                             <div className="lg:w-1/2 flex flex-col justify-center items-center gap-2 w-full border-2 border-[#272887]  p-5  m-5 rounded-xl">
//                                 <span className=' font-krona text-yellow-500 '>Customize your Indiviual plan</span>
//                                 <div className='flex justify-between items-center'>
//                                     <h1>Subscription </h1>
//                                     <div className="flex justify-center items-center gap-1 border rounded-full p-1">
//                                         <button className={`${pricing === 'Indiviual' ? "bg-gradient-to-r from-[#4546ED] to-[#272887]" : ""}  rounded-full p-2 px-6 font-krona hover:px-10 duration-300`}>Indiviual</button>
//                                         <button className={`${pricing === 'Team' ? "bg-gradient-to-r from-[#4546ED] to-[#272887]" : ""} rounded-full p-2 px-6 font-krona hover:px-10 duration-300`}>Team</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }
//                 {pricing == "Team" &&
//                     (
//                         <div className="flex justify-center items-center lg:flex-row flex-col md:px-24 px-5 w-full">
//                             <div className="lg:w-1/2 w-full bg-gray-600 p-5  m-5 rounded-xl">
//                                 <span className='flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500 '> Team</span>
//                             </div>
//                             <div className="lg:w-1/2 w-full bg-gray-600 p-5  m-5 rounded-xl">
//                                 <span className='flex flex-row justify-start items-center gap-2 font-mono font-bold text-yellow-500 '> Team</span>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </div >
//     )
// }

// export default Pricing
