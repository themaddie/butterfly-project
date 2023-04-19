import React from 'react';
// Styles
import Style from '../../Styles/Plot/Rectangle.module.css';

const RectangleComp = (props) => {

    return (
        <div className={Style.container}>
            <img alt='index' src={props.source} />
            <h3> {props.title} </h3>
            <span> {props.description} </span>
            <button>کلیک کن!</button>
        </div>
    );
};

export default RectangleComp;