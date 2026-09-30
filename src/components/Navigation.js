import React from 'react'
import '../styles/Navbar.css'
export default function Navigation(){
    return(
      <nav className='navbar'>
        <div className="logo">
            <img src="/images/Frame 2 1.png"></img>
        </div>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    )
}