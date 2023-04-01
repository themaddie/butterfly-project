import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../Styles/Header.module.css';
// Images
import headerIndex from '../Images/lightsIcon.png';
import navLine from '../Images/headerLine.png';

const Header = () => {
    return (
        <div className={Style.container}>
            <img className={Style.headIcon} src={headerIndex} alt='lights' />
            <nav className={Style.navMenu}>
                <Link to="/about" className={Style.navButton} target='_blank'>اینجا کجاست؟</Link>
                <img className={Style.navLine} src={navLine} alt='line' />
            </nav>
        </div>
    );
};

export default Header;