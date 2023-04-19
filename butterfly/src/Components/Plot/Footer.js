import React from 'react';
// Styles
import Style from '../../Styles/Plot/Footer.module.css'

const Footer = (props) => {
    return (
        <div className={Style.container}>
            <img src={props.firstSource} alt='icon' />
            <img src={props.secondSource} alt='icon' />
            <img src={props.thirdSource} alt='icon' />
        </div>
    );
};

export default Footer;