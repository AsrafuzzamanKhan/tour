import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
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
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://traveler-server.vercel.app/users', {
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
        <div>SignUp</div>
    )
}

export default SignUp