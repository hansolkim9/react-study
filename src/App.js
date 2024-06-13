import './App.css';
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import Counter from "./components/practice/Counter";

const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음
    const expenses = [
        {
            title: '치킨',
            price: 23000,
            date: new Date (2024, 6 - 1, 3)
        },
        {
            title: '점심식사',
            price: 10000,
            date: new Date (2024, 2 - 1, 4)
        },
        {
            title: '저녁식사',
            price: 20000,
            date: new Date (2024, 6 - 1, 5)
        },
    ]

    return (
        <>
            <Counter />
            <ExpenseList expenses={expenses} />
        </>
    );
}

export default App;
