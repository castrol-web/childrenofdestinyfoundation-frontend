import React from 'react';
import {useNavigate } from 'react-router-dom';
import mainpageImage from "../images/mainpageImage.jpg";
import { FaHome } from "react-icons/fa";
import "./mainpage.css";

function MainPage() {
    const navigate = useNavigate();
    //home navigation
    function navigateHome() {
        navigate("/home")
    }

    //search kids function
    function searchKids(event) {
        event.preventDefault();
        try {

        } catch (error) {

        }
    }
    return (
        <>
            <div className='landing-page'>
                <img className="background-image" src={mainpageImage} alt="Background" />
                <div className='content'>
                    <h1 id='main_heading'>Welcome to Children Of Destiny Foundation</h1>
                    <div className='search_container'>
                        <input placeholder='search kids by names' className="w-2/4 border border-gray-400 p-2 rounded-md" type='text'></input>
                        <button type='submit'
                        className='ml-1 mx-auto items-center justify-center 
                        sm:w-auto bg-indigo-600 px-2 py-2 text-white font-semibold rounded-md shadow-sm
                         hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'  
                         onClick={searchKids}>Search</button>
                    </div>
                    <div className='mt-5'>
                        <button onClick={navigateHome} className='flex mx-auto items-center justify-center 
                        sm:w-auto bg-indigo-600 px-6 py-3 text-white font-semibold rounded-md shadow-sm
                         hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Go to Homepage <FaHome />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage