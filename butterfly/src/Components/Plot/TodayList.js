import React from 'react';
import { useState } from 'react';
// Styles
import Style from '../../Styles/Plot/TodayList.module.css';
// Images
import deleteIcon from '../../Images/Plot/delete.png';
import doneIcon from '../../Images/Plot/done.png';

const TodayList = (props) => {

    const [deleteTodo, setDeleteTodo] = useState(false);
    const [doneTodo, setDoneTodo] = useState(false);

    return (
        <div className={Style.container}>
            <div className={Style.todos}>
                <div className={Style.todo}>
                    <div className={Style.box} onMouseEnter={() => setDeleteTodo(true)} onMouseLeave={() => setDeleteTodo(false)}>
                        {deleteTodo ? (
                            <img className={Style.delete} alt='delete' src={deleteIcon} />
                        ) : ''}
                        <span className={`${Style.text} ${doneTodo ? Style.doneText : ''}`} >{props.text}</span>
                    </div>
                    {doneTodo ? (<img className={Style.doneIcon} src={doneIcon} />)
                        :
                        (<div className={Style.checkbox} onClick={() => setDoneTodo(true)}></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TodayList;