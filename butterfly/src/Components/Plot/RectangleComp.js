import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../../Styles/Plot/Rectangle.module.css';

const RectangleComp = (props) => {

    return (
        <div className={Style.container}>
            <img alt='index' src={props.source} />
            <h3> {props.title} </h3>
            <span> {props.description} </span>
            <Link to={props.btnLink}><button>کلیک کن!</button></Link>
        </div>
    );
};

export default RectangleComp;