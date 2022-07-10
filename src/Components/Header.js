import React from 'react'
import './Header.css'
// import TrollFace from './images/Troll-Face.png'

export const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className="logo">
                <img src={require("../images/trollFace.png")} alt="logo" />
                Meme Generator
            </div>
            <div className="links">
                <div className="link">Made by Isha</div>
            </div>
        </nav>
    </div>
  )
}
