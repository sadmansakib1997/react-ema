import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
        <div>
            <a href="/home">Home</a>
            <a href="/ticket">Ticket</a>
            <a href="/number">Number</a>
            <a href="/address">Address</a>
        </div>
            
        </nav>
    );
};

export default Header;