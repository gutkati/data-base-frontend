import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {
    const setActive = ({isActive}) => `header__link ${isActive ? "header__active-link" : ""}`

    return (
        <div className='header'>
            <nav className='header__container'>
                <NavLink to='/photo' className={setActive}>Фото</NavLink>
                <NavLink to='/movies' className={setActive}>Видео</NavLink>
            </nav>
        </div>
    );
};

export default Header;