import React from 'react'
import SocialLogin from '../SocialLogin/SocialLogin'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='py-32 mb-8 min-h-screen bg-blue-200/40'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center min-h-screen text-black'>
                    <div className='bg-gray-100 flex items-center rounded-2xl shadow-lg max-w-3xl p-5'>
                        <div className='md:w-1/2 px-8'>
                            <h2 className="font-bold text-2xl uppercase">login</h2>
                            <p className="text-sm mt-4">If you already a memeber, easily login</p>
                            {/* form  */}
                            <form className="flex flex-col gap-4">
                                <input className="p-2 mt-8 rounded-xl border dark:bg-white" type="email" name="email" placeholder="Email" required />
                                <div className="relative"
                                >
                                    <input className="p-2 mt-3 rounded-xl border w-full dark:bg-white" type="password" name="password" placeholder="Password" required />

                                    {/* <div>
                                        <AiOutlineEye className="absolute top-1/2 right-3 -translate-y-1/2" />
                                    </div> */}
                                </div>
                                <input className="bg-blue-400 rounded-xl py-2 hover:scale-105 duration-300" type="submit" value="Login" />

                            </form>
                            <div className="mt-10 grid  grid-cols-3 items-center text-gray-500">
                                <hr className="border-gray-500" />
                                <p className="text-center text-sm">OR</p>
                                <hr className="border-gray-500" />
                            </div>
                            {/* social login  */}
                            <div>
                                <SocialLogin></SocialLogin>
                            </div>
                            <p className="mt-5 text-xs border-b py-4">
                                Forgot Your Password?
                            </p>
                            <div className="text-xm flex justify-between items-center mt-3">
                                <p>
                                    Don't have an account
                                </p>
                                <Link to='/signup'>
                                    <button className="py-2 bg-white px-2 border rounded-xl hover:scale-110 duration-300">Register</button></Link>
                            </div>
                        </div>


                        {/* image  */}
                        <div className="md:block hidden w-1/2 ">
                            <img className=" rounded-2xl " src='https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login