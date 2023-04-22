import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Styles
import Style from '../../Styles/Plot/Today.module.css';
// Images
import homeIcon from '../../Images/Plot/home.png';
import exitIcon from '../../Images/Plot/exit.png';
import settingsIcon from '../../Images/Plot/settings.png';
import addIcon from '../../Images/Plot/add.png';
import closeIcon from '../../Images/Plot/delete.png';
import deleteIcon from '../../Images/Plot/delete.png';
import doneIcon from '../../Images/Plot/done.png';
// Components
import Footer from './Footer';
import { Link } from 'react-router-dom';

const API_BASE = "http://localhost:3001";

const Today = () => {

    // Popup
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

    // Get Data

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [deleteBtn, setDeleteBtn] = useState(false);

    useEffect(() => getTasks(), []);

    const getTasks = () => {
        axios.get(API_BASE + '/todos')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err));
    }

    const completeTask = async id => {
        const data = await fetch(API_BASE + '/todo/complete/' + id, { method: 'PUT' })
            .then(res => res.json());

        setTasks(todos => todos.map(todo => {
            if (todo._id === data._id)
                todo.complete = data.complete;
            return todo;
        }));
    };

    const deleteTask = async id => {
        const data = await fetch(API_BASE + '/todo/delete/' + id, { method: 'DELETE' })
            .then(res => res.json());

        setTasks(todos => todos.filter(todo => todo._id !== data._id));
    };

    const addTask = async () => {
        const data = await fetch(API_BASE + '/todo/new', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: newTask
            })
        }).then(res => res.json());

        setTasks([...tasks, data]);
        setAddToDay(false);
        setNewTask("");
    };

    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <div className={Style.thisMonthBox}>
                    <div className={Style.titleBox}>
                        <h2>ماه جاری</h2>
                        <img alt='add' id='addThisMonth' className={Style.addTodo} src={addIcon} onClick={() => setAddToMonth(true)} />
                        {addToMonth ?
                            (<div className={Style.addModal}>
                                <div className={Style.modalContent}>
                                    <img src={closeIcon} alt='close' onClick={() => setAddToMonth(false)} />
                                    <input type='text' placeholder='به این ماه یه تسک اضافه کن.' /> <br />
                                    <button>اضافه کن!</button>
                                </div>
                            </div>)
                            : ''}
                    </div>
                </div>
                <div className={Style.thisWeekBox}>
                    <div className={Style.titleBox}>
                        <h2>هفته جاری</h2>
                        <img alt='add' id='addThisWeek' className={Style.addTodo} src={addIcon} onClick={() => setAddToWeek(true)} />
                        {addToWeek ?
                            (<div className={Style.addModal}>
                                <div className={Style.modalContent}>
                                    <img src={closeIcon} alt='close' onClick={() => setAddToWeek(false)} />
                                    <input type='text' placeholder='به این هفته یه تسک اضافه کن.' /> <br />
                                    <Link><button>اضافه کن!</button></Link>
                                </div>
                            </div>)
                            : ''}
                    </div>
                </div>
                <div className={Style.thisDayBox}>
                    <div className={Style.titleBox}>
                        <h2>امروز</h2>
                        <img alt='add' id='addToDay' className={Style.addTodo} src={addIcon} onClick={() => setAddToDay(true)} />
                        {addToDay ?
                            (<div className={Style.addModal}>
                                <div className={Style.modalContent}>
                                    <img src={closeIcon} alt='close' onClick={() => setAddToDay(false)} />
                                    <input type='text' placeholder='به امروز یه تسک اضافه کن.' onChange={e => setNewTask(e.target.value)} value={newTask} /> <br />
                                    <button onClick={addTask}>اضافه کن!</button>
                                </div>
                            </div>)
                            : ''}
                    </div>
                    <div className={Style.todos}>
                        {
                            tasks.map(todo => (
                                <div className={Style.todo} key={todo._id}>
                                    <div className={Style.box} onMouseEnter={() => setDeleteBtn(true)} onMouseLeave={() => setDeleteBtn(false)}>
                                        {deleteBtn ? (
                                            <img className={Style.delete} alt='delete' src={deleteIcon} onClick={() => deleteTask(todo._id)} />
                                        ) : ''}
                                        <span className={`${Style.text} ${todo.complete ? Style.doneText : ''}`} >{todo.text}</span>
                                    </div>
                                    {todo.complete ? (<img className={Style.doneIcon} src={doneIcon} alt='done' />)
                                        :
                                        (<div className={Style.checkbox} onClick={() => completeTask(todo._id)}></div>)
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer firstSource={homeIcon} firstLink={'/'} secondSource={settingsIcon} secondLink={'/'} thirdSource={exitIcon} thirdLink={'/Plot'} />
        </div>
    );
};

export default Today;