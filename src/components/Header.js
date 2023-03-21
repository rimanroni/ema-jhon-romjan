import React from 'react';
import logo from '../images/logo.png'
const Header = () => {
    return (
        <div className='NavArea'>
            <p ><img src={logo} alt="" /></p>
        
            <nav>
                <a href="/home">Home</a>
                <a href="/service">Service</a>
                <a href="/bolog">Bolog</a>
                <a href="/product">Product</a>
            </nav>
        </div>
    );
};

export default Header;