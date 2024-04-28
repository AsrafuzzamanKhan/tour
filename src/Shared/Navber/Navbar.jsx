import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const [isSticky, setIsSticky] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                Navigate('/')
                // console.log(navigate)
            }).catch((error) => {
                console.log(error)
                // An error happened.
            });
    }
    // set toggleMenu

    const toggleMenu = () => {
        setOpen(!open)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {

            window.addEventListener('scroll', handleScroll);

        }
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Tours", path: "tours" },
        { link: "Contact", path: "contact" },
        { link: "Blog", path: "blog" },
    ]
    return (
        <header className=' w-full fixed top-0 left-0 right-0 '>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 border-b bg-white duration-300' : ''}`}>
                <div className='container mx-auto flex items-center justify-between'>
                    <div>
                        <Link to='/'> <img src={logo} alt="" className=' inline-block' /></Link>
                    </div>
                    {/* navbar for large device  */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map((item, i) => (
                            < NavLink key={i} to={item.path} spy={true} smooth={true} offset={-100} className='block text-base text-gray-900 hover:text-gray-400 first:font-medium'>{item.link}</NavLink>
                        ))}

                    </ul>

                    <div className="flex items-center justify-center gap-x-[10px] ">

                        {/* drop down  */}
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ">
                            <label tabIndex={0} >
                                <div className="avatar online placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full  w-10">
                                        {user ? <img src={user?.photoURL} alt={user?.displayName} /> : <><FaRegUserCircle /></>}

                                    </div>
                                </div>

                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-white">
                                <li className="bg-black p-2 rounded">Hello, {user?.displayName}</li>

                                <li className="mt-1 mx-auto">
                                    <div className=" text-black hover:scale-95 hover:bg-slate-400 dark:hover:bg-blue-400
                                    dark:hover:text-white
                                    ">
                                        {user?.email ?
                                            <button onClick={handleLogOut} className="text-[16px]">Logout</button>
                                            :
                                            <Link className="text-[16px] " to='/login'> Login</Link>
                                        }
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* btn for large device  */}
                    <div className='hidden lg:flex items-center space-x-8'>
                        <a href="/login" className='hidden lg:flex items-center text-orange-600'>Login</a>
                        <button className='bg-orange-600 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:scale-95'>Sign up</button>
                    </div>

                    {/* menu btn for mobile  */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none focus:text-gray-600'> {open ? (<FaXmark size={20} />
                            ) : (<GiHamburgerMenu size={20} />
                            )}
                        </button>
                    </div>
                </div>
                {/* nav item for mobile  */}
                <div className={`${open ? 'right-0' : '-right-full'} space-y-4 px-4  py-7 bg-orange-400 text-white mt-20 w-[80%] fixed top-0 bottom-0 z-999 h-screen transition-all duration-700 overflow-hidden `}>
                    {navItems.map((item, i) => (
                        < NavLink key={i} to={item.path} spy="true" smooth='true' offset={-100} className='block text-base text-gray-900 hover:text-gray-400 first:font-medium'>{item.link}</NavLink>
                    ))}
                </div>
            </nav>

        </header>
    )
}

export default Navbar