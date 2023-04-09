import React from 'react';

const Todo = () => {
    return (
        <div>
            <h1>Your To Do</h1>
            <div className='todos'>
                <div className='todo'>
                    <div className='checkbox'></div>
                    <div className='text'>order pizza</div>
                    <div className='delete-todo'>x</div>
                </div>

                <div className='todo is-complete'>
                    <div className='checkbox'></div>
                    <div className='text'>order pizza</div>
                    <div className='delete-todo'>x</div>
                </div>
            </div>
        </div>
    );
};

export default Todo;