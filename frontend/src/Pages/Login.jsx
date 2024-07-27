import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [forgetPassword, setForgetPassword] = useState(true);
    const [sendOtp, setSendOtp] = useState(true);
    const [changePass, setChangePass] = useState(true);
    const [otpInput, setOtpInput] = useState(Array(4).fill(""));

    const inputRefs = useRef([]);

    const handleOtpChange = (value, index) => {
        let otpArray = [...otpInput];
        otpArray[index] = value;
        setOtpInput(otpArray);

        // Focus next input field if value is entered
        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const isForgetPass = () => {
        setForgetPassword(!forgetPassword);
    };
    const isChangePass = () => {
        setChangePass(!changePass);
    };

    const isOtpSend = (e) => {
        e.preventDefault();
        setSendOtp(false);
    };
    const navigate = useNavigate()
    const savePass = () => {
        navigate('/register')
    }

    return (
        <div className="flex items-center md:flex-row flex-col-reverse justify-center text-white h-screen container mx-auto py-[470px] md:py-[400px] md:px-20 px-8">
            {forgetPassword && (
                <div
                    data-aos="fade-left"
                    className="md:h-[600px] h-[500px] md:w-1/2 w-full flex md:py-24 py-8 flex-col items-center justify-center border-4 border-[#272887] md:rounded-l-3xl rounded-0"
                >
                    <h1 className='text-4xl font-krona'>Sign in</h1>
                    <ul className='flex gap-5 py-5'>

                    </ul>
                    <p>or use your Account</p>
                    <form className='w-full flex justify-center flex-col items-center text-black py-3 gap-3'>
                        <input className='w-4/5 p-2 px-4 rounded-lg' type="email" name='username' placeholder='Email' />
                        <input className='w-4/5 p-2 px-4 rounded-lg' type="password" name='username' placeholder='Password' />
                        <button onClick={isForgetPass} className='text-white text-lg font-light'>Forgot your password ?</button>
                        <button className='mt-6 rounded-full bg-gradient-to-r from-[#4546ED] to-[#272887] p-3 w-40 font-bold hover:w-52 text-white duration-300'>SIGN IN</button>
                    </form>
                </div>
            )}
            {!forgetPassword && sendOtp && (
                <div
                    data-aos="fade-left"
                    className="md:h-[600px] h-[500px] md:w-1/2 w-full flex md:py-24 py-8 flex-col items-center justify-center border-4 border-[#272887] md:rounded-l-3xl rounded-0"
                >
                    <h1 className='text-4xl py-10 font-krona'>Forget Password</h1>
                    <form onSubmit={isOtpSend} className='w-full flex justify-center flex-col items-center text-black py-3 gap-3'>
                        <input
                            className='w-4/5 p-2 px-4 rounded-lg'
                            type="email"
                            name='email'
                            placeholder='Email'
                        />
                        <button
                            type="submit"
                            className='mt-6 rounded-full bg-gradient-to-r from-[#4546ED] to-[#272887] p-3 w-1/2 font-bold hover:w-4/5 text-white duration-300'
                        >
                            SEND OTP
                        </button>
                    </form>
                </div>
            )}
            {!sendOtp && changePass && (
                <div
                    data-aos="fade-left"
                    className="md:h-[600px] h-[500px] md:w-1/2 w-full flex md:py-24 py-8 flex-col items-center justify-center border-4 border-[#272887] md:rounded-l-3xl rounded-0"
                >
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-light font-krona text-3xl">
                                <p>EMAIL VERIFICATION</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>We have sent a code to your email ba**@dipainhouse.com</p>
                            </div>
                        </div>
                        <div>
                            <form action="" method="post">
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                        {otpInput.map((value, index) => (
                                            <div className="w-16 h-16" key={index}>
                                                <input
                                                    className="w-full h-full flex flex-col text-black items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-2xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                    type="text"
                                                    maxLength="1"
                                                    value={value}
                                                    onChange={(e) => handleOtpChange(e.target.value, index)}
                                                    ref={(el) => inputRefs.current[index] = el}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col space-y-5">
                                        <div className='flex flex-row justify-center items-center gap-2 w-full'>
                                            <button onClick={isChangePass} className='p-3 hover:w-4/5 font-semibold duration-300 bg-gradient-to-r from-[#4546ED] to-[#272887] w-1/2 rounded-full'>VERIFY ACCOUNT</button>
                                        </div>
                                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn't receive code?</p>
                                            <a className="flex flex-row items-center text-blue-600" href="#" onClick={isOtpSend}>Resend</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {!changePass && (
                <div
                    data-aos="fade-left"
                    className="md:h-[600px] h-[500px] md:w-1/2 w-full flex md:py-24 py-8 flex-col items-center justify-center border-4 border-[#272887] md:rounded-l-3xl rounded-0"
                >
                    <h1 className='text-4xl py-10 font-krona'>Change Password</h1>
                    <form className='w-full flex justify-center flex-col items-center text-black py-3 gap-3'>
                        <input
                            className='w-4/5 p-2 px-4 rounded-lg'
                            type="password"
                            name='password'
                            placeholder='Password'
                        />
                        <input
                            className='w-4/5 p-2 px-4 rounded-lg'
                            type="password"
                            name='confirmpassword'
                            placeholder='Confirm Password'
                        />
                        <button
                            onClick={savePass}
                            type="submit"
                            className='mt-6 rounded-full bg-gradient-to-r from-[#4546ED] to-[#272887] p-3 w-1/2 font-bold hover:w-4/5 text-white duration-300'
                        >
                            SAVE PASSWORD
                        </button>
                    </form>
                </div>
            )}
            <div
                data-aos="fade-right"
                className="flex flex-col items-center justify-center md:py-24 py-8 md:bg-gradient-to-r from-[#272887] to-[#4546ED] bg-gradient-to-t from-[#272887] to-[#4546ED] h-[600px] md:rounded-r-3xl rounded-0 md:w-1/2 w-full"
            >
                <h1 className='text-4xl text-center font-krona'>HELLO FRIENDS!</h1>
                <h1 className=' text-center pt-5'>Enter your personal details and start journey with us</h1>
                <Link to='/register' className='md:my-16 mt-4 rounded-full flex justify-center  p-3 w-40  bg-white font-bold hover:w-52 text-[#272887] duration-300'>REGISTER</Link>
            </div>
        </div>
    );
}

export default Login;
