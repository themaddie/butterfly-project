import React, { useEffect, useState } from 'react';
// Styles
import Style from '../../Styles/Plot/Today.module.css';
// Images
import homeIcon from '../../Images/Plot/home.png';
import exitIcon from '../../Images/Plot/exit.png';
import settingsIcon from '../../Images/Plot/settings.png';
import addIcon from '../../Images/Plot/add.png';
import closeIcon from '../../Images/Plot/delete.png';
// Components
import Footer from './Footer';
import TodayList from './TodayList';
import { Link } from 'react-router-dom';

const Today = () => {

    const [addToMonth, setAddToMonth] = useState(false);
    const [addToWeek, setAddToWeek] = useState(false);
    const [addToDay, setAddToDay] = useState(false);

    useEffect(() => {
        if (addToMonth) {
            setAddToWeek(false);
            setAddToDay(false);
        }
    }, [addToMonth]);
    useEffect(() => {
        if (addToWeek) {
            setAddToMonth(false);
            setAddToDay(false);
        }
    }, [addToWeek]);
    useEffect(() => {
        if (addToDay) {
            setAddToMonth(false);
            setAddToWeek(false);
        }
    }, [addToDay]);

    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <div className={Style.thisMonthBox}>
                    <div className={Style.titleBox}>
                        <h2>ماه جاری</h2>
                        <img alt='add' id='addThisMonth' className={Style.addTodo} src={addIcon} onClick={() => setAddToMonth(true)} />
                        {addToMonth ?
                            (<div className={Style.addModal}>
                                <img src={closeIcon} alt='close' onClick={() => setAddToMonth(false)} />
                                <input type='text' placeholder='به این ماه یه تسک اضافه کن.' /> <br />
                                <Link><button>اضافه کن!</button></Link>
                            </div>)
                            : ''}
                    </div>
                    <TodayList text='Butterfly Project' />
                </div>
                <div className={Style.thisWeekBox}>
                    <div className={Style.titleBox}>
                        <h2>هفته جاری</h2>
                        <img alt='add' id='addThisWeek' className={Style.addTodo} src={addIcon} onClick={() => setAddToWeek(true)} />
                        {addToWeek ?
                            (<div className={Style.addModal}>
                                <img src={closeIcon} alt='close' onClick={() => setAddToWeek(false)} />
                                <input type='text' placeholder='به این هفته یه تسک اضافه کن.' /> <br />
                                <Link><button>اضافه کن!</button></Link>
                            </div>)
                            : ''}
                    </div>
                    <TodayList text='کتاب!' />
                </div>
                <div className={Style.thisDayBox}>
                    <div className={Style.titleBox}>
                        <h2>امروز</h2>
                        <img alt='add' id='addToDay' className={Style.addTodo} src={addIcon} onClick={() => setAddToDay(true)} />
                        {addToDay ?
                            (<div className={Style.addModal}>
                                <img src={closeIcon} alt='close' onClick={() => setAddToDay(false)} />
                                <input type='text' placeholder='به امروز یه تسک اضافه کن.' /> <br />
                                <Link><button>اضافه کن!</button></Link>
                            </div>)
                            : ''}
                    </div>
                    <TodayList text='خوردن محمدصادق' />
                </div>
            </div>
            <Footer firstSource={homeIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Today;