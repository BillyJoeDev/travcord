import React from 'react'
import './Footer.css'
import { FaTwitter, FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
        <div className='footer-container'>
            <div className='footer-columns'>
                <div className='main-footer-column'>
                    <h1>IMAGINE A PLACE</h1>
                    <div className='footer-socials'>
                        <FaTwitter className='footer-social-icon twitter' />
                        <FaInstagram className='footer-social-icon insta' />
                        <FaFacebookSquare className='footer-social-icon facebook' />
                        <FaYoutube className='footer-social-icon youtube' />
                    </div>
                </div>
                <ul className='footer-column'>
                    <h1>Product</h1>
                    <li>Download</li>
                    <li>Nitro</li>
                    <li>Status</li>
                </ul>
                <ul className='footer-column'>
                    <h1>Company</h1>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>Branding</li>
                    <li>Newsroom</li>
                </ul>
                <ul className='footer-column'>
                    <h1>Resources</h1>
                    <li>College</li>
                    <li>Support</li>
                    <li>Safety</li>
                    <li>Blog</li>
                    <li>Feedback</li>
                    <li>Developers</li>
                    <li>StreamKit</li>
                </ul>
                <ul className='footer-column'>
                    <h1>Policies</h1>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookie Settings</li>
                    <li>Guidelines</li>
                    <li>Acknowledgements</li>
                    <li>Licenses</li>
                    <li>Moderation</li>
                </ul>
            </div>
            <div className='footer-seperator' />
            <div className='footer-branding'>
                <a className='footer-logo-wrapper' href='/'>
                    <img className='footer-logo' src='images/Travcord.png' alt="" />
                    Travcord
                </a>
                <button>Open Travcord</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer