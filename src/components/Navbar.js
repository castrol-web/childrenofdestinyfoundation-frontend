import React, {useState } from 'react'
import destinylogo from "../images/destinylogo.PNG";
import "./navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
const [clicked,setclicked] = useState(false);
const [linksshowing,setlinksshowing] = useState(false);

//humburger menu function
function changeMenu(){
  setclicked(!clicked);
  setlinksshowing(!linksshowing);
}

// Function to handle click on navigation link
function handleNavLinkClick() {
  // Close the menu
  setclicked(false);
  setlinksshowing(false);
}

  return (
    <nav className='nav_container'>
    {/* nav logo */}
    <Link to='/'>
        <img src={destinylogo} alt='Destiny_logo' className='destiny_logo'/>
    </Link>
        <ul className={clicked ? 'active' : ''} id={linksshowing ? '' :'navshowing'}>
            <li><Link   onClick={handleNavLinkClick} to="/">HOME</Link></li>
            <li><Link   onClick={handleNavLinkClick} to='/about-us'>ABOUT US</Link></li>
            <li><Link   onClick={handleNavLinkClick} to="/kids">OUR KIDS</Link></li>
            <li><Link   onClick={handleNavLinkClick} to="/gallery">GALLERY</Link></li>
            <li><Link   onClick={handleNavLinkClick} to="/contact-us">CONTACT US</Link></li>
            
        </ul>
      
        <div id="mobile" onClick={changeMenu}>
        { clicked ? <AiOutlineClose className='text-slate-50'/> :<GiHamburgerMenu className='text-slate-50'/> }

        </div>
    </nav>
  )
}

export default Navbar;