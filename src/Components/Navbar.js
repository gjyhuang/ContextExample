import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
           <button>Change Theme</button> 
        </div>
    )
}

export default Navbar;