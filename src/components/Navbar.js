import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <div>
            <h1>Web Warrior</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/project'>Porfolio Projects</Link>
            </div>
        </div>
    )
}
