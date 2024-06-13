import './App.css';
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

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


    // ExpenseForm 에게 내려보낼 함수
    const onAddExpense = (userInput) => {
        console.log('App.js 가 내려보낸 함수 호출!');
        console.log(userInput)

        expenses.push(userInput);
        console.log(expenses);
    };

    return (
        <>
            <NewExpense onSave={onAddExpense} />
            <ExpenseList expenses={expenses} />
        </>
    );
}

export default App;
