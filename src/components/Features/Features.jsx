import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <main className='features-wrapper'>
        <section className='feature-container one'>
            <img src='images/studygroup.svg' />
            <div className='feature-container-info'>
                <h1>Create an invite-only place where you belong</h1>
                <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </section>
        <section className='feature-container two'>
            <div className='feature-container-info'>
                <h1>Where hanging out is easy</h1>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
            <img src='images/chillin.svg' />
        </section>
        <section className='feature-container three'>
            <img src='images/coach.svg' />
            <div className='feature-container-info'>
                <h1>From few to a fandom</h1>
                <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </section>
    </main>
  )
}

export default Features