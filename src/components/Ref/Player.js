import React, { useRef, useState } from "react";

const Player = () => {

    const $nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('anonymous');

    const nameChangeHandler = e => {
        setEnteredName($nameInputRef.current.value);
        $nameInputRef.current.value = '';
    };

    return (
        <section id="player">
            <h2>Welcome {enteredName}!</h2>
            <p>
                <input ref={$nameInputRef} type="text"/>
                <button onClick={nameChangeHandler}>Set Name</button>
            </p>
        </section>
    );
};

export default Player;