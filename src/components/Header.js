import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <nav>
            <Link to="/" className='link-style'><h1>K9friends</h1></Link>
            <ul>
                <Link to="/" className='link-style'><li>Find A Pet </li></Link>
                <Link to="/signup" className='link-style'><li>Sign Up</li></Link>
                <Link to="/login" className='link-style'><li>Log in</li></Link>
            </ul>
        </nav>
    )
}

export default Header;
