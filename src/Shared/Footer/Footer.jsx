import React from 'react';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-[#F2F2F4]'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 justify-between items-start px-[2vw] lg:px-0'>
                    <div>
                        <img src={logo} alt="" />
                        <p>Welcome to our Trip and Tour Agency.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-2 '>Contact</h1>
                        <p>123456789</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-2 '>Useful Links</h1>
                        <p>Travel Blog & Tips</p>
                        <p>Working With Us</p>
                        <p>Be Our Partner</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-2 '>
                            Pay Safely With Us
                        </h1>
                        <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer