import React from "react";
import './Navbar.scss'
import {NavLink} from "react-router-dom";

export default () =>
    <nav className='navbar'>
        <ul className='navbar'>
            <li className='navbar'><NavLink className='navbar' exact activeClassName='active' to={'/'}>Home</NavLink></li>
            <li className='navbar'><NavLink className='navbar' to={'/about'}>About</NavLink></li>
        </ul>
    </nav>