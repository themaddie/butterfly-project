import React from 'react';
import { useState } from 'react';
// Styles
import Style from '../../Styles/Plot/TodayList.module.css';
// Images
import deleteIcon from '../../Images/Plot/delete.png';
import doneIcon from '../../Images/Plot/done.png';

const TodayList = (props) => {

    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const [showDoneIcon, setShowDoneIcon] = useState(false);

    return (
        <div className={Style.container}>
            <div className={Style.todos}>
                <div className={Style.todo}>
                    <div className={Style.box} onMouseEnter={() => setShowDeleteIcon(true)} onMouseLeave={() => setShowDeleteIcon(false)}>
                        {showDeleteIcon ? (
                            <img className={Style.deleteTodo} alt='delete' src={deleteIcon} />
                        ) : ''}
                        <span className={Style.text}>{props.text}</span>
                    </div>
                    {showDoneIcon ? (<img className={Style.doneTodo} src={doneIcon} />)
                        :
                        (<div className={Style.checkbox} onClick={() => setShowDoneIcon(true)}></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TodayList;