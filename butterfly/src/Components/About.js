import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../Styles/About.module.css';
// Images
import aboutIndex from '../Images/aboutIndex.png';
import navLine from '../Images/headerLine.png';

const About = () => {
    const [aboutTitle, setAboutTitle] = useState("عنوان خیلی الکی");
    const [aboutDes, setAboutDes] = useState("متن کاملا فرضی");
    return (
        <div className={Style.container}>
            <header>
                <img className={Style.navLine} src={navLine} alt='line' />
                <Link to="/" className={Style.navButton}>خونه</Link>
            </header>
            <main>
                <img className={Style.aboutIndex} src={aboutIndex} />
                <div className={Style.aboutContainer}>
                    <h1 className={Style.aboutTitle}>{aboutTitle}</h1>
                    <p className={Style.aboutDes}>{aboutDes}</p>
                </div>
            </main>
        </div>
    );
};

export default About;