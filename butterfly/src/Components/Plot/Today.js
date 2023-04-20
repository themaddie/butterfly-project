import React from 'react';
// Styles
import Style from '../../Styles/Plot/Today.module.css';
// Images
import homeIcon from '../../Images/Plot/home.png';
import exitIcon from '../../Images/Plot/exit.png';
import settingsIcon from '../../Images/Plot/settings.png';
// Components
import Footer from './Footer';

const Today = () => {
    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <div className={Style.thisMonthBox}>
                    <h2>ماه جاری</h2>
                </div>
                <div className={Style.thisWeekBox}>
                    <h2>هفته جاری</h2>
                </div>
                <div className={Style.thisDayBox}>
                    <h2>امروز</h2>
                </div>
            </div>
            <Footer firstSource={homeIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Today;