import React from 'react'
import './Header.css'
import logo from '../assets/troll-face.jpeg'

export default function() {
    return (
        <header className='header'>
            <div>
                <img src={logo} alt="logo" className='header--logo'/>
                <h2>Meme Generator</h2>
            </div>
            <h4>React Course - Project 3</h4>
        </header>
    )
}