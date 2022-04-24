import React from 'react'
import logo from '../images/airbnb.png'

const Navbar = () => {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}

export default Navbar