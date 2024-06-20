import React from 'react';
import { MdDelete, MdDone } from "react-icons/md";
import './scss/TodoItem.scss';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <li className={`todo-list-item`}>
            <div className={`check-circle ${todo.done ? 'active' : ''}`}  onClick={() => onToggle(todo.id)}>
                {todo.done && <MdDone />}
            </div>
            <span className={`text ${todo.done ? 'finish': ''}`}>{todo.text}</span>
            <div className='remove' onClick={() => onRemove(todo.id)}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;
