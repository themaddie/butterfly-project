import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../Styles/Torabiika.module.css';

const Torabiika = () => {
    const [torabiikaTitle, setTorabiikaTitle] = useState("عنوان خیلی الکی");
    const [torabiikaDes, setTorabiikaDes] = useState("متن کاملا فرضی")
    return (
        <div className={Style.container}>
            <h1 className={Style.torabiikaTitle}>{torabiikaTitle}</h1>
            <p className={Style.torabiikaDes}>{torabiikaDes}</p>
            <Link to="/about" className={Style.torabiikaBtn}>بفشار!</Link>
        </div>
    );
};

export default Torabiika;