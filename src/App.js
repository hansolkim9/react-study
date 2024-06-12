import './App.css';
import React from "react";
import ExpenseItem from "./components/expenses/ExpensesItem";


const App = () => {

    return (
        <>
            <ExpenseItem title={"치킨"} price={23000} date={new Date(2024, 6, 3)} />
            <ExpenseItem title="점심식사" price={10000} date={new Date(2024, 6, 4)} />
            <ExpenseItem title="저녁식사" price={20000} date={new Date(2024, 6, 5)} />
        </>
    );
}

export default App;
