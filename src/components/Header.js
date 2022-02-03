import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <nav>
            <Link to="/"><h1>K9friends</h1></Link>
            <ul>
                <li><a href="#">Find A Pet</a></li>
                <Link to="/signup"><li>Sign Up</li></Link>
                <Link to="/login"><li>Log in</li></Link>
            </ul>
        </nav>
        // <h1>This is Header file</h1>
    )
}

export default Header;
