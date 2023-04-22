// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // Styles
// import Style from '../../Styles/Plot/Todo.module.css';

// const API_BASE = "http://localhost:3001";

// const Todo = () => {
//     const [todos, setTodos] = useState([]);
//     const [popupActive, setPopupActive] = useState(false);
//     const [newTodo, setNewTodo] = useState("");

//     useEffect(() => {
//         getTodos();
//     }, []);

//     const getTodos = () => {
//         axios.get(API_BASE + "/todos")
//             .then(res => setTodos(res.data))
//             .catch(err => console.error("Error: ", err));
//     };

//     const completeTodo = async id => {
//         const data = await fetch(API_BASE + '/todo/complete/' + id, { method: 'PUT' })
//             .then(res => res.json());

//         setTodos(todos => todos.map(todo => {
//             if (todo._id === data._id) {
//                 todo.complete = data.complete;
//             }
//             return todo;
//         }));
//     };

//     const deleteTodo = async id => {
//         const data = await fetch(API_BASE + '/todo/delete/' + id, { method: 'DELETE' })
//             .then(res => res.json());

//         setTodos(todos => todos.filter(todo => todo._id !== data._id));
//     };

//     const addTodo = async () => {
//         const data = await fetch(API_BASE + '/todo/new', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 text: newTodo
//             })
//         }).then(res => res.json());

//         setTodos([...todos, data]);
//         setPopupActive(false);
//         setNewTodo("");
//     };

//     return (
//         <div className={Style.container}>
//             <div className={Style.todos}>
//                 {todos.map(todo => (
//                     <div className={`${Style.todo} ${(todo.complete ? Style.complete : '')}`} key={todo._id}>
//                         <div className={Style.text}>{todo.text}</div>
//                         <div className={Style.checkbox} onClick={() => completeTodo(todo._id)}>?</div>
//                         <div className={Style.delete} onClick={() => deleteTodo(todo._id)}>delete</div>
//                     </div>

//                 ))}
//             </div>
//             <div className={Style.addPopup} onClick={() => setPopupActive(true)} > + </div>
//             {popupActive ? (
//                 <div className={Style.popup}>
//                     <div className={Style.closePopup} onClick={() => setPopupActive(false)}>x</div>
//                     <div className={Style.content}>
//                         <h4>Add</h4>
//                         <input type='text'
//                             className={Style.addTodoInput}
//                             onChange={e => setNewTodo(e.target.value)}
//                             value={newTodo} />
//                     </div>
//                     <div className={Style.createTodo} onClick={addTodo}>create</div>
//                 </div>
//             ) : ''}
//         </div>
//     );
// };

// export default Todo;