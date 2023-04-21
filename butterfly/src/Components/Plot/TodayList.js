import React from 'react';
// Styles
import Style from '../../Styles/Plot/TodayList.module.css';
// Images
import editIcon from '../../Images/Plot/edit.png';

const TodayList = (props) => {

    return (
        <div className={Style.container}>
            <div className={Style.todos}>
                <div className={Style.todo}>
                    <div style={{ display: 'flex' }}>
                        <img className={Style.edit} alt='edit' src={editIcon} />
                        <span className={Style.text}>{props.text}</span>
                    </div>
                    <div className={Style.checkbox}>{props.done}</div>
                </div>
            </div>
        </div>
    );
};

export default TodayList;