import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
    return (
    <div className="layout">
        <Navbar />
        <div className="content">{children}
        </div>
        <footer>
            <p>Copyright Tom Hu @2021</p>
        </footer>

    </div>
    )
}
