import './App.css';
import React, {useState} from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음
    const expenses = [
        {title: '치킨', price: 23000, date: new Date (2024, 6 - 1, 3)},
        {title: '점심식사', price: 10000, date: new Date (2023, 2 - 1, 4)},
        {title: '찜닭', price: 20000, date: new Date (2024, 6 - 1, 5)},
        {title: '컵라면', price: 1500, date: new Date (2022, 4 - 1, 5)}
    ]

    // 배열을 상태변수로 관리
    const [expenseList, setExpenseList] = useState(expenses);

    // ExpenseForm 에게 내려보낼 함수
    const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);

    return (
        <>
            <NewExpense onSave={onAddExpense} />
            <ExpenseList expenses={expenseList} />
        </>
    );
}

export default App;
