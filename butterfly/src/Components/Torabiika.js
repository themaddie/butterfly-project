import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../Styles/Torabiika.module.css';

const Torabiika = () => {
    const [torabiikaTitle, setTorabiikaTitle] = useState("ترابیکا کیه؟");
    const [torabiikaDes, setTorabiikaDes] = useState("ترابیکا، یه دختر معمولی و کمی تا اندکی تنهاست. اون داره نهایت تلاشش رو برای پیدا کردن مسیرش توی این دنیا میکنه اما تا الان موفق نبوده و احتمالا موفق هم نمیشه...");
    return (
        <div className={Style.container}>
            <h1 className={Style.torabiikaTitle}>{torabiikaTitle}</h1>
            <p className={Style.torabiikaDes}>{torabiikaDes}</p>
            <Link to="/about" className={Style.torabiikaBtn}>بفشار!</Link>
        </div>
    );
};

export default Torabiika;