import React from 'react'
import SearchFlight from '../SearchFlight/SearchFlight'
import "./hero.css"

function Hero() {
    return (
        <section className='hero '>
            <div className="hero-contaier relative container mx-auto h-full">
                <div className="content">
                    <p className='content-text'>Hello!</p>
                    <p className='content-text'>Where are</p>
                    <p className='content-text'>you <span className='text-primary'>flying</span> to ...</p>
                </div>

                <div className='absolute left-0 -bottom-3/4 sm:-bottom-[50px] w-full'>
                    <SearchFlight />
                </div>
            </div>
        </section>
    )
}

export default Hero