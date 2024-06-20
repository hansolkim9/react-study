import React from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = ({ todos, input, onChange, onSubmit, onToggle, onRemove }) => {
    return (
        <div className='TodoTemplate'>
            <TodoHeader count={todos.filter(todo => !todo.done).length} />
            <TodoMain todos={todos} onToggle={onToggle} onRemove={onRemove} />
            <TodoInput input={input} onChange={onChange} onSubmit={onSubmit} />
        </div>
    );
};

export default TodoTemplate;
