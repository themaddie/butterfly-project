import React from 'react';
// Styles
import Style from '../../Styles/Plot/Home.module.css';
// Images
import todoEmoji from '../../Images/Plot/todo.png';
import goalsEmoji from '../../Images/Plot/goals.png';
import exitIcon from '../../Images/Plot/exit.png';
import profileIcon from '../../Images/Plot/profile.png';
import settingsIcon from '../../Images/Plot/settings.png';
// Components
import RectangleComp from './RectangleComp';
import SquareComp from './SquareComp';
import Footer from './Footer';

const Home = () => {
    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <div className={Style.homeBox}>
                    <div>
                        <SquareComp firstLine="خوش اومدی مهدیه!" secondLine="امیدوارم امروز همون روز باشه!" />
                        <SquareComp margin="40px" firstLine="شنبه" secondLine="۲۷ فروردین ۱۴۰۲" />
                    </div>
                    <RectangleComp title="Goals" description="متن الکی" source={goalsEmoji} btnLink={'/'} />
                    <RectangleComp title="Today List" description="متن الکی" source={todoEmoji} btnLink={'/plot/todo'} />
                </div>
            </div>
            <Footer firstSource={profileIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Home;