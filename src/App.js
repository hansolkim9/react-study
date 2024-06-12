import './App.css';
import React from "react";
import ExpenseItem from "./components/expenses/ExpensesItem";


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
            <ExpenseItem
                title={expenses[0].title}
                price={expenses[0].price}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                price={expenses[1].price}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                price={expenses[2].price}
                date={expenses[2].date}
            />
        </>
    );
}

export default App;
