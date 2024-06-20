import React, { useReducer, useState } from 'react';
import './App.css';
import TodoTemplate from './components/Todo/TodoTemplate';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// 초기 상태
const initialTodos = [
    { id: 1, text: '리액트 공부하기', done: false },
    { id: 2, text: '운동하기', done: false },
    { id: 3, text: '청소하기', done: false }
];

// 리듀서 함수
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [input, setInput] = useState('');
    const [nextId, setNextId] = useState(4); // 초기 값은 4로 설정 (이미 3개의 초기 할 일이 있으므로)

    const addTodo = (text) => {
        const newTodo = {
            id: nextId,
            text,
            done: false
        };
        dispatch({ type: 'ADD_TODO', todo: newTodo });
        setNextId(nextId + 1);
    };

    const onChange = (e) => setInput(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return; // 빈 입력은 무시
        addTodo(input);
        setInput('');
    };

    const onToggle = (id) => dispatch({ type: 'TOGGLE_TODO', id });
    const onRemove = (id) => dispatch({ type: 'REMOVE_TODO', id });

    return (
        <TodoTemplate
            todos={todos}
            input={input}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default App;
