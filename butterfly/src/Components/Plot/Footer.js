import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../../Styles/Plot/Footer.module.css'

const Footer = (props) => {
    return (
        <div className={Style.container}>
            <Link to={props.firstLink} style={{ marginLeft: '5%' }}> <img src={props.firstSource} alt='icon' /> </Link>
            <Link to={props.secondLink} style={{ marginLeft: '5%' }}> <img src={props.secondSource} alt='icon' /> </Link>
            <Link to={props.thirdLink}> <img src={props.thirdSource} alt='icon' /> </Link>
        </div>
    );
};

export default Footer;