import React, {Fragment} from 'react'
import hero from '../images/bg.png'


export default function Hero (){
    return (
        <section className='hero'>
            <img src={hero} className="hero--image" />
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}