import React from 'react';
import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({ todos, onToggle, onRemove }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};

export default TodoMain;
