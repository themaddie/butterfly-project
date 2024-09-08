import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Styles
import Style from '../Styles/Torabiika.module.css';

const Torabiika = () => {
    const [torabiikaTitle, setTorabiikaTitle] = useState("ترابیکا کیه؟");
    const [torabiikaDes, setTorabiikaDes] = useState("...ترابیکا، یه دختر معمولیه. اون داره نهایت تلاشش رو برای پیدا کردن مسیرش توی این دنیا میکنه...");
    return (
        <motion.div whileHover={{ scale: 1.1 }} className={Style.container}>
            <h1 className={Style.torabiikaTitle}>{torabiikaTitle}</h1>
            <p className={Style.torabiikaDes}>{torabiikaDes}</p>
            <Link to="/about" className={Style.torabiikaBtn}>بفشار!</Link>
        </motion.div>
    );
};

export default Torabiika;
