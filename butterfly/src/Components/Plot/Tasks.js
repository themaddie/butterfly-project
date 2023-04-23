import React from 'react';
// Styles
import Style from '../../Styles/Plot/Tasks.module.css';
// Images
import homeIcon from '../../Images/Plot/home.png';
import exitIcon from '../../Images/Plot/exit.png';
import settingsIcon from '../../Images/Plot/settings.png';
// Components
import Footer from './Footer';
import TaskList from './TaskList';

const Tasks = () => {

    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <TaskList title='ماه جاری' placeHolder='تسک این ماه' periodLabel='Month' getAddress='/todos' postAddress='/todo/new' putAddress='/todo/complete/' deleteAddress='/todo/delete/' />

                <TaskList title='هفته جاری' placeHolder='تسک این هفته' periodLabel='Week' getAddress='/todos' postAddress='/todo/new' putAddress='/todo/complete/' deleteAddress='/todo/delete/' />

                <TaskList title='امروز' placeHolder='تسک امروز' periodLabel='Today' getAddress='/todos' postAddress='/todo/new' putAddress='/todo/complete/' deleteAddress='/todo/delete/' />
            </div>
            <Footer firstSource={homeIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Tasks;