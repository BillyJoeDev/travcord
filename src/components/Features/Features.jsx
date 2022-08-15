import React from 'react'
import './Features.css'
import { AiOutlineDownload } from 'react-icons/ai'

const Features = () => {
  return (
    <main className='features-wrapper'>
        <section className='feature-container one'>
            <img src='images/studygroup.svg' alt="" />
            <div className='feature-container-info'>
                <h1>Create an invite-only place where you belong</h1>
                <p>Travcord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </section>
        <section className='feature-container two'>
            <div className='feature-container-info'>
                <h1>Where hanging out is easy</h1>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
            <img src='images/chillin.svg' alt="" />
        </section>
        <section className='feature-container three'>
            <img src='images/coach.svg' alt="" />
            <div className='feature-container-info'>
                <h1>From few to a fandom</h1>
                <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </section>
        <section className='main-feature-container'>
            <div className='main-feature-container-info'>
                <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <img src='images/justchillin.svg' alt="" />
            <div className='main-feature-download'>
                <div className='main-feature-download-info'>
                    <img src='images/sparkles.svg' alt="" />
                    <h1>Ready to start your journey?</h1>
                </div>
                <a className='main-feature-download-button'>
                    <AiOutlineDownload className='download-icon'/>
                    Download for Windows
                </a>
            </div>
        </section>
    </main>
  )
}

export default Features