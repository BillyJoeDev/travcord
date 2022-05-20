import React from 'react'
import './Hero.css'
import { AiOutlineDownload } from 'react-icons/ai'

const Hero = () => {
  return (
    <header className='hero-wrapper'>
        <div className='hero-images-container'>
            <img src='/images/clouds.svg' className='hero-cloud-img'/>
            <img src='/images/boots.svg' className='hero-boots-img'/>
            <img src='/images/sitting.svg' className='hero-sitting-img'/>
        </div>
        <section className='hero-section'>
            <h1 className='hero-title'>IMAGINE A PLACE...</h1>
            <p className='hero-summary'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className='hero-cta-wrapper'>
                <a className='download-button'>
                    <AiOutlineDownload className='download-icon'/>
                    Download for Windows
                </a>
                <button className='open-button'>Open Discord in your browser</button>
            </div>
        </section>
    </header>
  )
}

export default Hero