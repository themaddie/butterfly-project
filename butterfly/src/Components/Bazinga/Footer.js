import React from 'react';
// Styles
import Style from '../../Styles/Bazinga/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={Style.container}>
            <p>Made with hope by <Link to='https://github.com/torabiika' style={{color: '#000000'}}>torabiika</Link></p>
        </div>
    );
};

export default Footer;