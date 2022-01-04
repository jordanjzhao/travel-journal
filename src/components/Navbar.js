import React from 'react';
import globeIcon from '../images/globe.png';

export default function Navbar() {
    return (
        <nav>
            <img src={globeIcon} alt="" className="navbar--icon" />
            <div>Travel Journal</div>
        </nav>
    )
}