import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import './scss/TodoInput.scss';

const TodoInput = ({ input, onChange, onSubmit }) => {

    // 입력창 토글링 상태값
    const [open, setOpen] = useState(false);

    // 버튼 토글링 함수
    const onToggle = () => setOpen(prevOpen => !prevOpen);

    return (
        <>
            <div className='form-wrapper'>
                <form className='insert-form'>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        value={input}
                    />
                </form>
            </div>
            <button className={`insert-btn ${open ? 'open' : ''}`} onClick={onToggle}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;