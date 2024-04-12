import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./mainpage.css";


const date = new Date();

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center w-full mt-10">
            <div className='flex gap-7 items-center justify-center'>
                <p className='castrol_span'>Made with <i>❤️</i> by Castrol Banda</p>
                <p>copyright © {date.getFullYear()} Children of Destiny App. All rights reserved.</p>
            </div>

            <div className='social_icons mt-2'>
                <span className='facebook_icon'><FaFacebookF /></span>
                <span className='twitter_icon'><FaTwitter /></span>
                <span className='instagram_icon'><FaInstagram /></span>
            </div>
        </footer>
    )
}

export default Footer