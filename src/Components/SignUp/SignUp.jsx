import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import SocialLogin from '../SocialLogin/SocialLogin'

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log('new user', loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('new account', data)
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>

            <div className="bg-blue-200/40 dark:glass">
                <div className=" container mx-auto px-2">
                    <div className="flex justify-center items-center min-h-screen dark:text-black ">

                        <div className="bg-gray-100 flex items-center rounded-2xl shadow-lg max-w-3xl p-5">
                            {/* image  */}
                            <div className="md:block hidden w-1/2 ">
                                <img className=" rounded-2xl" src='https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                            </div>
                            {/* form  */}
                            <div className="md:w-1/2 px-8">
                                <h2 className="font-bold text-2xl uppercase">Signup</h2>
                                <p className="text-sm mt-4">Create an acoount</p>
                                <form
                                    className="flex flex-col gap-4"
                                    onSubmit={handleSubmit(onSubmit)}>

                                    {/* name  */}
                                    <input
                                        className="p-2 mt-8 rounded-xl border dark:bg-white"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span>Name is required</span>}

                                    {/* email  */}
                                    <input
                                        className="p-2 mt-2 rounded-xl border dark:bg-white"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span> Email is required</span>}
                                    {/* password  */}
                                    <div className="relative">
                                        <input
                                            className="p-2 mt-2 rounded-xl border w-full dark:bg-white"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/
                                            })}
                                        />
                                        {errors.password?.type === "required" && (
                                            <p role="alert">password is required</p>
                                        )}
                                        {errors.password?.type === 'minLength' && <p>
                                            Password must be in 6 charecters</p>}
                                        {errors.password?.type === 'maxLength' && <p>
                                            Password must be less then 20 charecters</p>}
                                        {errors.password?.type === 'pattern' && <p>
                                            Password must include one Lowercase, one uppercase one digit and one spacial charecter</p>}

                                        {/* <div>
                                            <AiOutlineEye
                                                className="absolute top-1/2 right-4 -translate-y-1/2"
                                            />
                                        </div> */}
                                    </div>
                                    <input type="submit" value="Sign Up" className="bg-blue-400 rounded-xl py-2 hover:scale-105 duration-300" />

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


                                <div className="text-xm flex justify-between items-center mt-3">
                                    <p>
                                        Already have an account?
                                    </p>
                                    <Link to='/login'>
                                        <button className="py-2 bg-white px-2 border rounded-xl hover:scale-110 duration-300">Login</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp