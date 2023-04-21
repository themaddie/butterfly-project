import React, { useState } from 'react';
// Styles
import Style from '../../Styles/Plot/Today.module.css';
// Images
import homeIcon from '../../Images/Plot/home.png';
import exitIcon from '../../Images/Plot/exit.png';
import settingsIcon from '../../Images/Plot/settings.png';
import addIcon from '../../Images/Plot/add.png';
// Components
import Footer from './Footer';
import TodayList from './TodayList';

const Today = () => {

    const [addToMonth, setAddToMonth] = useState(false);
    const [addToWeek, setAddToWeek] = useState(false);
    const [addToDay, setAddToDay] = useState(false);

    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <div className={Style.thisMonthBox}>
                    <div className={Style.titleBox}>
                        <h2>ماه جاری</h2>
                        <img alt='add' id='addThisMonth' className={Style.addTodo} src={addIcon} onClick={() => setAddToMonth(true)} />
                        {addToMonth ?
                            (<div>its me, hi, im the problem, its me</div>)
                            : ''}
                    </div>
                    <TodayList text='Butterfly Project' />
                </div>
                <div className={Style.thisWeekBox}>
                    <div className={Style.titleBox}>
                        <h2>هفته جاری</h2>
                        <img alt='add' id='addThisWeek' className={Style.addTodo} src={addIcon} onClick={() => setAddToWeek(true)} />
                        {addToWeek ?
                            (<div>its me, hi, im the problem, its me</div>)
                            : ''}
                    </div>
                    <TodayList text='کتاب!' />
                </div>
                <div className={Style.thisDayBox}>
                    <div className={Style.titleBox}>
                        <h2>امروز</h2>
                        <img alt='add' id='addToday' className={Style.addTodo} src={addIcon} onClick={() => setAddToDay(true)} />
                        {addToDay ?
                            (<div>its me, hi, im the problem, its me</div>)
                            : ''}
                    </div>
                    <TodayList text='TodayList' />
                </div>
            </div>
            <Footer firstSource={homeIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Today;