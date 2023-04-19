import React from 'react';
// Styles
import Style from '../../Styles/Plot/Square.module.css';

const SquareComp = (props) => {
    return (
        <div className={Style.container} style={{marginTop: `${props.margin}`}}>
            <span> {props.firstLine} </span>
            <span> {props.secondLine} </span>
        </div>
    );
};

export default SquareComp;