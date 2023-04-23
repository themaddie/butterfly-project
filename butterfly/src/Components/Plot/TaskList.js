import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Styles
import Style from '../../Styles/Plot/TaskList.module.css';
// Images
import addIcon from '../../Images/Plot/add.png';
import closeIcon from '../../Images/Plot/delete.png';
import deleteIcon from '../../Images/Plot/delete.png';
import doneIcon from '../../Images/Plot/done.png';

const API_BASE = "http://localhost:3001";

const TaskList = (props) => {

    // Props
    const getUrl = props.getAddress;
    const postUrl = props.postAddress;
    const putUrl = props.putAddress;
    const deleteUrl = props.deleteAddress;
    const label = props.periodLabel;
    // States
    const [deleteBtn, setDeleteBtn] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    // Functions
    useEffect(() => {
        getTasks();
    }, );

    const getTasks = () => {
        axios.get(API_BASE + getUrl)
            .then(res => setTasks(res.data))
            .catch(err => console.log(err));
    };

    const completeTask = async id => {
        const data = await fetch(API_BASE + putUrl + id, { method: 'PUT' })
            .then(res => res.json());

        setTasks(todos => todos.map(todo => {
            if (todo._id === data._id)
                todo.complete = data.complete;
            return todo;
        }));
    };

    const deleteTask = async id => {
        const data = await fetch(API_BASE + deleteUrl + id, { method: 'DELETE' })
            .then(res => res.json());

        setTasks(todos => todos.filter(todo => todo._id !== data._id));
    };

    const addTask = async () => {
        const data = await fetch(API_BASE + postUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: newTask,
                label: label
            })
        }).then(res => res.json());

        setTasks([...tasks, data]);
        setShowAddModal(false);
        setNewTask("");
    };

    return (
        <div className={Style.container} style={{marginLeft: `${props.margin}`}}>
            <div className={Style.titleBox}>
                <h2>{props.title}</h2>
                <img alt='add' className={Style.addTask} src={addIcon} onClick={() => setShowAddModal(true)} />
                {showAddModal ?
                    (<div className={Style.addModal}>
                        <div className={Style.modalContent}>
                            <img src={closeIcon} alt='close' onClick={() => setShowAddModal(false)} />
                            <input type='text' placeholder={props.placeHolder} onChange={e => setNewTask(e.target.value)} value={newTask} /> <br />
                            <button onClick={addTask}>اضافه کن!</button>
                        </div>
                    </div>)
                    : ''}
            </div>
            <div className={Style.tasksBox}>
                {
                    tasks.map(task => (
                        <div className={Style.task} key={task._id}>
                            <div className={Style.box} onMouseEnter={() => setDeleteBtn(true)} onMouseLeave={() => setDeleteBtn(false)}>
                                {deleteBtn ? (
                                    <img className={Style.deleteBtn} alt='delete' src={deleteIcon} onClick={() => deleteTask(task._id)} />
                                ) : ''}
                                <span className={`${Style.text} ${task.complete ? Style.doneText : ''}`} >{task.text}</span>
                            </div>
                            {task.complete ? (<img className={Style.doneIcon} src={doneIcon} alt='done' />)
                                :
                                (<div className={Style.checkbox} onClick={() => completeTask(task._id)}></div>)
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TaskList;