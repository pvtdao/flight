import React from 'react'
import "./hero.css"

function Hero() {
    return (
        <section className='hero '>
            <div className="hero-contaier container mx-auto h-full">
                <div className="content">
                    <p className='content-text'>Hello!</p>
                    <p className='content-text'>Where are</p>
                    <p className='content-text'>you <span className='text-primary'>flying</span> to ...</p>
                </div>
            </div>
        </section>
    )
}

export default Hero