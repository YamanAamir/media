import React, { useEffect } from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


function Login() {

    useEffect(() => {
        AOS.init({ duration: "500", delay: "0" });
    });
    return (
        <div className="flex items-center md:flex-row flex-col-reverse  justify-center text-white h-screen container mx-auto py-[470px] md:py-[400px] md:px-20 px-8">

            <div
                data-aos="fade-left" className="md:h-[600px] h-[500px] md:w-1/2 w-full flex md:py-24 py-8 flex-col  items-center justify-center border-4 border-[#272887] md:rounded-l-3xl rounded-0">
                <h1 className='text-4xl font-krona' >Sign in</h1>
                <ul className='flex gap-5 py-5'>
                    <li className='border rounded-full p-4 hover:bg-white hover:text-black duration-200'><FaFacebookF /></li>
                    <li className='border rounded-full p-4 hover:bg-white hover:text-black duration-200'><FaGoogle /></li>
                    <li className='border rounded-full p-4 hover:bg-white hover:text-black duration-200'><FaLinkedinIn /></li>
                </ul>
                <p>or use your Account</p>
                <form className='w-full flex justify-center flex-col items-center text-black py-3 gap-3'>
                    <input className='w-4/5 p-2 px-4 rounded-lg' type="email" name='username' placeholder='Email' />
                    <input className='w-4/5 p-2 px-4 rounded-lg' type="password" name='username' placeholder='Password' />
                    <p className='text-white text-lg font-light'>Forgot your password ?</p>
                    <button className='mt-6 rounded-full bg-gradient-to-r from-[#4546ED] to-[#272887] p-3 w-40 font-bold hover:w-52 text-white duration-300'>SIGN IN</button>
                </form>
            </div>
            <div

                data-aos="fade-right" className="flex flex-col items-center justify-center md:py-24 py-8 md:bg-gradient-to-r from-[#272887] to-[#4546ED] bg-gradient-to-t from-[#272887] to-[#4546ED] h-[600px] md:rounded-r-3xl rounded-0 md:w-1/2 w-full">
                <h1 className='text-4xl text-center font-krona'>HELLO FRIENDS!</h1>
                <h1 className=' text-center pt-5' >Enter your personal details and start journey with us</h1>
                <Link to='/register' className='md:my-16 mt-4 rounded-full flex justify-center  p-3 w-40  bg-white font-bold hover:w-52 text-[#272887] duration-300'>REGISTER</Link>
            </div>
        </div>
    )
}

export default Login
