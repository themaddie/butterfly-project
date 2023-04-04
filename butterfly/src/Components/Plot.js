import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Styles
import Style from '../Styles/Plot.module.css';
// Images
import plotIndex from '../Images/plotIndex.png';

const Plot = () => {
    const [plotTitle, setPlotTitle] = useState("وقت، طلاست.");
    const [plotDes, setPlotDes] = useState("می‌دونی اولین و مهم‌ترین قدم برای مدیریت زمان، بین این همه تکنیک ریز و درشت برنامه‌ریزی چیه؟");
    return (
        <div className={Style.container}>
            <motion.div whileHover={{ scale: 1.1 }} className={Style.plotContainer}>
                <h1 className={Style.plotTitle}>{plotTitle}</h1>
                <p className={Style.plotDes}>{plotDes}</p>
            <Link to="/plot" className={Style.plotBtn}>بفشار!</Link>
            </motion.div>
            <img className={Style.plotIndex} src={plotIndex} />
        </div>
    );
};

export default Plot;