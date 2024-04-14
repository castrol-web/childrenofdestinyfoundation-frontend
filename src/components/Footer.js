import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./mainpage.css";


const date = new Date();

function Footer() {
    return (
        <div className='bg-gray-800 w-full mx-auto px-5 py-8 lg:py-4 rounded-lg mt-0' >
            <footer className="text-white text-center mt-10">
                <div className='flex gap-7 items-center justify-center'>
                    <p className='castrol_span'>Made with <i>❤️</i> by Castrol Banda</p>
                    <p>copyright © {date.getFullYear()} Children of Destiny App. All rights reserved.</p>
                </div>

                <div className='social_icons mt-4'>
                    <span className='facebook_icon'><FaFacebookF /></span>
                    <span className='twitter_icon'><FaTwitter /></span>
                    <span className='instagram_icon'><FaInstagram /></span>
                </div>
            </footer>
        </div>

    )
}

export default Footer