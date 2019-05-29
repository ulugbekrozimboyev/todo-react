import React from 'react';
import {Link, NavLink} from 'react-router-dom'
 
const Navbar = () => {
     
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">YT</a>
                <ul className="right">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/todos'>Todos</NavLink></li>
                    <li><NavLink to='/posts'>Posts</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
