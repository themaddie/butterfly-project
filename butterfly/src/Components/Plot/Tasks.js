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
                <TaskList margin='7%' title='ماه جاری' placeHolder='تسک این ماه' periodLabel='Month' getAddress='/month/todos' postAddress='/month/todo/new' putAddress='/month/todo/complete/' deleteAddress='/month/todo/delete/' />

                <TaskList margin='7%' title='هفته جاری' placeHolder='تسک این هفته' periodLabel='Week' getAddress='/week/todos' postAddress='/week/todo/new' putAddress='/week/todo/complete/' deleteAddress='/week/todo/delete/' />

                <TaskList title='امروز' placeHolder='تسک امروز' periodLabel='Today' getAddress='/today/todos' postAddress='/today/todo/new' putAddress='/today/todo/complete/' deleteAddress='/today/todo/delete/' />
            </div>
            <Footer firstSource={homeIcon} firstLink={'/plot/home'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Tasks;