import React from 'react';
// Styles
import Style from '../../Styles/Plot/Goals.module.css'
// Images
import ideaIcon from '../../Images/Plot/idea.png';
import homeIcon from '../../Images/Plot/home.png';
import exitIcon from '../../Images/Plot/exit.png';
import settingsIcon from '../../Images/Plot/settings.png';
// Components
import Footer from '../../Components/Plot/Footer';
import { Link } from 'react-router-dom';

const Goals = () => {
    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <div className={Style.thisYearBox}>
                    <div className={Style.titleBox}>
                        <h2 className={Style.thisYearTitle}>سال جاری</h2>
                        <span className={Style.thisYearDes}>برای سال جاری، حداکثر می‌تونی شیش تا هدف اصلی انتخاب کنی، پس دقت کن!</span>
                    </div>
                    <form>
                        <div className={Style.thisYearGoals}>
                            <div className={Style.left}>
                                <div className={Style.goals}>
                                    <img className={Style.ideaIcon} src={ideaIcon} alt='goal' />
                                    <input id={Style.goal1} type='text' placeholder='این هدف منه' />
                                </div>
                                <div className={Style.goals}>
                                    <img className={Style.ideaIcon} src={ideaIcon} alt='goal' />
                                    <input id={Style.goal2} type='text' placeholder='این هدف منه' />
                                </div>
                                <div className={Style.goals}>
                                    <img className={Style.ideaIcon} src={ideaIcon} alt='goal' />
                                    <input id={Style.goal3} type='text' placeholder='این هدف منه' />
                                </div>
                            </div>
                            <div className={Style.right}>
                                <div className={Style.goals}>
                                    <img className={Style.ideaIcon} src={ideaIcon} alt='goal' />
                                    <input id={Style.goal4} type='text' placeholder='این هدف منه' />
                                </div>
                                <div className={Style.goals}>
                                    <img className={Style.ideaIcon} src={ideaIcon} alt='goal' />
                                    <input id={Style.goal5} type='text' placeholder='این هدف منه' />
                                </div>
                                <div className={Style.goals}>
                                    <img className={Style.ideaIcon} src={ideaIcon} alt='goal' />
                                    <input id={Style.goal6} type='text' placeholder='این هدف منه' />
                                </div>
                            </div>
                        </div>                        
                        <Link><button className={Style.submitGoals}>ثبت کن!</button></Link>
                    </form>
                </div>
            </div>
            <Footer firstSource={homeIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Goals;