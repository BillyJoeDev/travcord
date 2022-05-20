import React from 'react'
import './Navbar.css'
import { FaDiscord, FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
        <div className='navbar-logo-wrapper'>
            <FaDiscord className='navbar-logo' />
            <h1 className='navbar-logo-text'>Discord</h1>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-link'>Download</li>
            <li className='navbar-link'>Nitro</li>
            <li className='navbar-link'>Safety</li>
            <li className='navbar-link'>Support</li>
            <li className='navbar-link'>Blog</li>
            <li className='navbar-link'>Careers</li>
        </ul>
        <div className='navbar-cta-wrapper'>
            <button className='navbar-cta'>Open Discord</button>
            <FaBars className='navbar-mobile' />
        </div>
    </nav>
  )
}

export default Navbar