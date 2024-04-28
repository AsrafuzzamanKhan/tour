import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [googleLoading, setGoogleLoading] = useState(false)
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // google sign in 
    const handleGoogleSigIn = () => {
        setGoogleLoading(true)
        googleSignIn()
            .then(result => {

                const loggedGoogleUser = result.user;
                // console.log('google login user: ', loggedGoogleUser)
                const saveUser = { name: loggedGoogleUser.displayName, email: loggedGoogleUser.email }
                // console.log('saveUser', saveUser);
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })

    }
    return (
        <div>
            <div>
                <button
                    onClick={handleGoogleSigIn}
                    className="bg-white border p-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">

                    {googleLoading ? <><span className="loading loading-ball loading-xs"></span>
                        < span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span></> : <><FcGoogle className="text-3xl mr-3" />Login with Google</>
                    }
                </button>
            </div>
        </div>
    )
}

export default SocialLogin