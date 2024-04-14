import React, { useState, useRef, useEffect } from 'react'
import destinylogo from "../images/destinylogo.PNG";
import "./navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
  const [clicked, setclicked] = useState(false);
  const [linksshowing, setlinksshowing] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    //click outside the menu closing
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Close the menu
        setclicked(false);
        setlinksshowing(false);
      }
    }
    //event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    //remove when unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  //humburger menu function
  function changeMenu() {
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
    <nav className='nav_container' ref={navRef}>
      {/* nav logo */}
      <Link to='/' onClick={handleNavLinkClick}>
        <img src={destinylogo} alt='Destiny_logo' className='destiny_logo' />
      </Link>
      <ul className={clicked ? 'active' : ''} id={linksshowing ? '' : 'navshowing'}>
        <li><Link to="/" onClick={handleNavLinkClick}>HOME</Link></li>
        <li><Link to='/about-us' onClick={handleNavLinkClick}>ABOUT US</Link></li>
        <li><Link to="/kids" onClick={handleNavLinkClick}>OUR KIDS</Link></li>
        <li><Link to="/gallery" onClick={handleNavLinkClick}>GALLERY</Link></li>
        <li><Link to="/contact-us" onClick={handleNavLinkClick}>CONTACT US</Link></li>

      </ul>

      <div id="mobile" onClick={changeMenu}>
        {clicked ? <AiOutlineClose className='text-slate-50' /> : <GiHamburgerMenu className='text-slate-50' />}

      </div>
    </nav>
  )
}

export default Navbar;