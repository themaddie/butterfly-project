import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../Styles/Bazinga.module.css';
// Images
import bazingaIndex from '../Images/bazingaIndex.JPG';

const Bazinga = () => {
    const [bazingaTitle, setBazingaTitle] = useState("عنوان خیلی الکی");
    const [bazingaDes, setBazingaDes] = useState("متن کاملا فرضی");
    return (
        <div className={Style.container}>
            <img className={Style.bazingaIndex} src={bazingaIndex} />
            <div className={Style.bazingaContainer}>
                <h1 className={Style.bazingaTitle}>{bazingaTitle}</h1>
                <p className={Style.bazingaDes}>{bazingaDes}</p>
                <Link to="/bazinga" className={Style.bazingaBtn}>بفشار!</Link>
            </div>
        </div>
    );
};

export default Bazinga;